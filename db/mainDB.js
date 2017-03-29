const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/test';

const sh_insert = function (data) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url).then(function (db) {
            return insertDocuments(db, data);
        }).then(function (response) {
            response.db.close();
            resolve("Data added successfully.");
        }).catch(function (err) {
            reject(err);
        });

        const insertDocuments = function(db, data) {
            return new Promise( function (resolve, reject) {
                const collection = db.collection('status');
                collection.insertMany(data).then(function (response) {
                    response.db = db;
                    resolve(response);
                }).catch(function (err) {
                    reject(err)
                });
            });
        };
    })
};

const data = [{
    central_heating: {
        heating: true,
        water: true
    }
}];

sh_insert(data).then(function (result) {
    console.log(result);
});
