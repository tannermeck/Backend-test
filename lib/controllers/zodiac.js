const { Router } = require('express');
const { data } = require('../../data/data.js');

module.exports = Router().get('/', (req, res) => {
  const map = data.map((sign) => {
    return { id: sign.id, name: sign.name };
  });
  res.send(map);
});
