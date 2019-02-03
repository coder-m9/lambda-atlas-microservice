const { MONGODB_URI } = process.env;
const db = require('../db');

module.exports.searchPlayers = function searchPlayers(pathParams, queryParams) {
  return db.connectToDatabase(MONGODB_URI)
    .then((client) => {
      const gameDb = client.db('game');
      return gameDb.collection('players').find({}).toArray()
        .then((res) => {    
          const response = {};        
          response.body = JSON.stringify(res);
          response.statusCode = 200;
          response.isBase64Encoded = false;
          console.log('GOT RESPONSE=', response);
          return response;
        });
    })
    .catch((err) => {
      console.log('=> an error occurred: ', err.stack);
      return { statusCode: 500, body: 'error' };
    });
};
