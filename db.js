"use strict";
const MongoClient = require('mongodb').MongoClient;

let cachedDb = null;

module.exports.connectToDatabase = function(uri) {

  if (cachedDb) {
    console.log('=> using cached database instance');
    return Promise.resolve(cachedDb);
  }

  return MongoClient.connect(uri)

    .then(db => {
      cachedDb = db;
      return cachedDb;
    });

}