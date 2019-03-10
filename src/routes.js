const route = require('express').Router();
const cors = require("cors");

route.use(cors());

route.get('/', (req, res, next) => {
  res.send({
    "version": "0.0.1",
    "api-name": "backend-lanches"
  })
})

route.get('/ingredients', (req, res, next) => {
  res.send([
    {"name": "alface", "value": 0.40},
    {"name": "bacon", "value": 2.00},
    {"name": "hambúrguer de carne", "value": 3.00},
    {"name": "ovo", "value": 0.80},
    {"name": "queijo", "value": 1.50}
  ])
})

route.get('/lanches', (req, res, next) => {
  res.send([
    {"name": "x-bacon", "ingredients": ["bacon", "hambúrguer de carne", "queijo"]},
    {"name": "x-burger", "ingredients": ["hambúrguer de carne", "queijo"]},
    {"name": "x-egg", "ingredients": ["ovo", "hambúrguer de carne", "queijo"]},
    {"name": "x-egg bacon", "ingredients": ["ovo", "bacon", "hambúrguer de carne", "queijo"]}
  ])
})

module.exports = route;
