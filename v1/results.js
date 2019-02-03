module.exports = function function1 (db, queryParams) {

    var db = client.db('circle');
    return db.collection('preference').find({}).toArray()
      .then((res) => 
      { 
        var newRes = {};
        
        newRes['dbRes'] = res;
        newRes['queryParams'] = queryParams;
        
        var response ={};
        response['body'] = JSON.stringify(newRes);
        response['statusCode'] = 200;
        response["isBase64Encoded"] = false
        
        
        return response; 
      })
      .catch(err => {
        console.log('=> an error occurred: ', err);
        return { statusCode: 500, body: 'error' };
      });
  }
