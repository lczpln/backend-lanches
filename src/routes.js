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
    {"name": "alface", "value": 0.4},
    {"name": "bacon", "value": 2.0},
    {"name": "hambúrguer de carne", "value": 3.0},
    {"name": "ovo", "value": 0.8},
    {"name": "queijo", "value": 1.5}
  ])
})

route.get('/lanches', (req, res, next) => {
  res.send([
    {"name": "x-bacon", "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5vGtjSWvwHWcmTKa-fHtyufc4N7EdGbkmqkr3crMBLhKF1bZ", "ingredients": ["bacon", "hambúrguer de carne", "queijo"]},
    {"name": "x-burger", "url":"https://admin.cmpedidos.com.br/foto/205/produtos/x-burguer-duplo-especial-25511.jpg", "ingredients": ["hambúrguer de carne", "queijo"]},
    {"name": "x-egg", "url":"https://www.deliverymuch.com.br/media/5942afbe1b3f0.png", "ingredients": ["ovo", "hambúrguer de carne", "queijo"]},
    {"name": "x-egg bacon", "url":"https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000nlD6jMAE/56f00258e4b050d3e1e29bd6.jpg&w=620&h=400", "ingredients": ["ovo", "bacon", "hambúrguer de carne", "queijo"]}
  ])
})

module.exports = route;
