'use strict';

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('Access root path');
  res.send('Hello World!:' + port);
});

app.get('/text/:text', (req, res) => {
  console.log('Access /text Path with params', req.params);
  res.send('Text: ' + req.params.text);
});

app.get('/port/:portNumber/:host', (req, res) => {
  console.log('Access /port Path with params', req.params);

  var config = {
    method: 'get',
    url: 'http://' + req.params.host + ':' + req.params.portNumber + '/',
    headers: {}
  };

  axios(config)
    .then(function (response) {
      const result = response.data;
      console.log(JSON.stringify(response.data));

      res.json({
        thisPort: port,
        portNumber: req.params.portNumber,
        response: result,
      });
    })
    .catch(function (error) {
      console.log(error);
      res.json({
        thisPort: port,
        portNumber: req.params.portNumber,
        error,
      });
    });



});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));