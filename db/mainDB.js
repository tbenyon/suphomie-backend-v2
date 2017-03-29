const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url).then(function (db) {
        return insertDocuments(db);
    }).then(function (response) {
        console.log("Data added successfully.");
        response.db.close();
    }).catch(function (err) {
        console.log(err);
    });

var insertDocuments = function(db) {
    return new Promise( function (resolve, reject) {
        var collection = db.collection('status');

        data = {
            central_heating: {
                heating: false,
                water: false
            }
        };

        collection.insert(data).then(function (response) {
            response.db = db;
            resolve(response);
        }).catch(function (err) {
            reject(err)
        });
    });
};
