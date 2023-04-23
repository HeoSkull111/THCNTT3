'use strict'
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SmartHouseRoute = require("./routes/Smarthouse.route"); 

const app = express();
const PORT = 8989;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/bedroom', SmartHouseRoute.routerBedroom);
app.use('/livingroom', SmartHouseRoute.routerLiving);
app.use('/kitchen', SmartHouseRoute.routerLiving);
app.listen(PORT, () => {
    console.log('App dang chay tren http://localhost:' + PORT)
})