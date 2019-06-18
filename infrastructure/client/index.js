const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const fetch = require('node-fetch')

const app = express();
const redisProvider = process.env.REDIS || 'localhost:6379'
const host = redisProvider.split(':')[0]
const port = redisProvider.split(':')[1]

const blockscoutBaseUrl = process.env.BLOCKSCOUT_URL || "https://blockscout.com/eth/goerli"

const cache = require('express-redis-cache')({
  host,
  port
});

app.use(express.static(path.join(__dirname, 'build')));

const cacheExpiration = parseInt(process.env.CACHE_EXPIRATION || '30')
app.get('/balances/:address',
  function (req, res, next) {
    // set cache name
    res.express_redis_cache_name = 'address-' + req.params.address;
    next();
  },
  cache.route({
    expire: cacheExpiration
  }),
  function (req, res) {
  fetch(`${blockscoutBaseUrl}/api?module=account&action=balance&address=${req.params.address}`)
    .then(response => response.json())
    .then(body => res.send(body))
    .catch(error => res.status(500).send({ error }))
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 8080);