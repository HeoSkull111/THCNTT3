const express = require('express');
const List = require('../controllers/Smarthouse.controller.js');

const routerLiving = express.Router();
const routerKitchen = express.Router();
const routerBedroom = express.Router();
//Bedroom
routerBedroom.post('/add', List.addBedroomEE);
routerBedroom.get('/get', List.getAllBedroomEEs);
routerBedroom.put('/update', List.updateBedroomEE);
routerBedroom.delete('/delete', List.deleteBedroomEE);
//Living room
routerLiving.post('/add', List.addLivingRoomEE);
routerLiving.get('/get', List.getAllLivingRoomEEs);
routerLiving.put('/update', List.updateLivingroomEE);
routerLiving.delete('/delte', List.deleteLivingroomEE);
//Kitchen
routerKitchen.post('/add', List.addKitchenEE);
routerKitchen.get('/get', List.getAllKitchenEEs);
routerKitchen.put('/update', List.updateKitchenEE);
routerKitchen.delete('/delete', List.deleteKitchenEE);


module.exports = {
    routerBedroom,
    routerLiving,
    routerKitchen
}