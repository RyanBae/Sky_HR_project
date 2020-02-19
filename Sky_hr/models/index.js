"use strict"

const fs = require("fs");
const mongoose = require("mongoose");
const {MongoClient} = require('mongodb');
const env = process.env.NODE_ENV || "development";
const config = require('../config/env')[env];

let connectionPool = mongoose.createConnection(config['mongoDB']['uri'] + '/sky', config['mongoDB']['option'],function (err) {

    console.log('mongoose connect OK!!')

});

let db = {};


fs.readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach((file) => {
        let getModelFunc = require(`./${file}`);
        let model = getModelFunc(connectionPool);
        db[model.modelName] = model;
    });

MongoClient.connect(config['mongoDB']['uri']+'/sky', config['mongoDB']['options'], function(err, client) {
    console.log("Connected Mongodb Connection");
    db.mongoClinet = client;
});

db.mongoose = mongoose;
db.connection = connectionPool;


module.exports = db;