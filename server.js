const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.disable('etag');

module.exports = { app };