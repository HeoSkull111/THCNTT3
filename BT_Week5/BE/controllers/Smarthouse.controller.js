'use strict';

const firebase = require("../database");
const firestore = firebase.firestore();

//Bedroom
const addBedroomEE = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('HomeEE').doc("Bedroom").set(data);
        res.send('Bedroom added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const getAllBedroomEEs = async (req, res, next) => {
    try {
        const BedroomEEs = await firestore.collection('HomeEE').doc("Bedroom");
        const data = await BedroomEEs.get();
        res.send(data.data());
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const updateBedroomEE = async (req, res, next) => {
    try {
        const data= req.body;
        await firestore.collection('HomeEE').doc("Bedroom").update(data);
        res.send('BedroomEEs updated successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const deleteBedroomEE = async (req, res, next) => {
    try {
        await firestore.collection('HomeEE').doc("Bedroom").delete();
    } catch (error) {
        res.status(400).send(error.message);
    }
};


//Living room
const addLivingRoomEE = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('HomeEE').doc("Livingroom").set(data);
        res.send('LivingroomEE added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const getAllLivingRoomEEs = async (req, res, next) => {
    try {
        const LivingroomEEs = await firestore.collection('HomeEE').doc("Livingroom");
        const data = await LivingroomEEs.get();
        res.send(data.data());
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const updateLivingroomEE = async (req, res, next) => {
    try {
        const data= req.body;
        await firestore.collection('HomeEE').doc("Livingroom").update(data);
        res.send('LivingroomEEs updated successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const deleteLivingroomEE = async (req, res, next) => {
    try {
        await firestore.collection('HomeEE').doc("Livingroom").delete();
    } catch (error) {
        res.status(400).send(error.message);
    }
};


//Kitchen
const addKitchenEE = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('HomeEE').doc("Kitchen").set(data);
        res.send('KitchenEE added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const getAllKitchenEEs = async (req, res, next) => {
    try {
        const KitchenEEs = await firestore.collection('HomeEE').doc("Bedroom");
        const data = await KitchenEEs.get();
        res.send(data.data());
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const updateKitchenEE = async (req, res, next) => {
    try {
        const data= req.body;
        await firestore.collection('HomeEE').doc("Kitchen").update(data);
        res.send('KitchenEEs updated successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const deleteKitchenEE = async (req, res, next) => {
    try {
        await firestore.collection('HomeEE').doc("Kitchen").delete();
    } catch (error) {
        res.status(400).send(error.message);
    }
};
module.exports = {
    addBedroomEE,
    getAllBedroomEEs,
    updateBedroomEE,
    deleteBedroomEE,
    addLivingRoomEE,
    getAllLivingRoomEEs,
    updateLivingroomEE,
    deleteLivingroomEE,
    addKitchenEE,
    getAllKitchenEEs,
    updateKitchenEE,
    deleteKitchenEE,
}