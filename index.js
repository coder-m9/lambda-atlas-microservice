const routes = require('./routes');

module.exports.handler = (event, context, callback) => {  
  context.callbackWaitsForEmptyEventLoop = false;
  let pathParams = '';
  let queryParams = '';

  if (event.queryStringParameters) {
    console.log ("Received name: " + event.queryStringParameters.name);
    queryParams = event.queryStringParameters;
  }
  if (event.pathParameters) {
    console.log("Received proxy: " + event.pathParameters.proxy);
    pathParams = event.pathParameters.proxy;    
  }
  console.log('event: ', event);  
  const { httpMethod } = event;
  const version = pathParams.split('/')[0];
  const domain = pathParams.split('/')[1];
  let path = pathParams.split('/')[2];

  console.log('httpMethod=', httpMethod);
  console.log('version=', version);
  console.log('domain=', domain);
  // add slash for path if no path specified
  path = path || '/';
  const controllerMapping = routes[version].controllermapping;
  const controllerName = controllerMapping[domain];
  const methodName = routes[version][httpMethod][controllerName][path];


  console.log('path=',path);
  console.log('controllerMapping=',controllerMapping);
  console.log('controllerName=',controllerName);
  console.log('methodName=',methodName);

  const controller = require( './'+version +'/' +controllerName );  
  console.log('controller=', controller);

  controller[methodName](pathParams, queryParams)
    .then((result) => {
      console.log('=> returning result: ', result);
      callback(null, result);
    })
    .catch((err) => {
      console.log('=> an error occurred: ', err);
      callback(err);
    });
};
