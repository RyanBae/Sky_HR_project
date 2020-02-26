"use strict"

const fs = require("fs");
const mongoose = require("mongoose");
const {MongoClient} = require('mongodb');
const env = process.env.NODE_ENV || "development";
const config = require('../config/env')[env];

mongoose.connect(config['mongoDB']['uri'] + config['databaseName'], config['mongoDB']['option'],function (err) {
    console.log('mongoose connect OK!!')
});
let db = {};
db.con = mongoose.connection
db.con.on('error', function(){
    console.log('Failed');
})
db.con.once('open', function(){
    console.log('DB Connected !!')
});




// fs.readdirSync(__dirname)
//     .filter((file) => {
//         return (file.indexOf(".") !== 0) && (file !== "index.js");
//     })
//     .forEach((file) => {
//         let getModelFunc = require(`./${file}`);
//         let model = getModelFunc(db.connection);
//         db[model.modelName] = model;
//         console.log(db[model.modelName])
//     });
    

// MongoClient.connect(config['mongoDB']['uri']+'/sky', config['mongoDB']['options'], function(err, client) {
//     console.log("Connected Mongodb Connection");
//     db.mongoClinet = client;
// });

db.mongoose = mongoose;
db.connection = db.con;


module.exports = db;
