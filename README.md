# lambda-microservice


- Each Microservice is versioned

- Under each version, you many have one more controller ( and its corresponding models). 
Controller is a logical separation for microservice. Depending on how you want your service boundary, you may have either one or more controller in your microservice.

- There will be multiple API endpoints / routes in a microservice

Let's take a example Game application which have microservices such as Game, Results. 

Microservice 1 - Game

Game microservice is versioned and have many API endpoints rules, players with different versions v1, v2

v1/
/rules
/players

v2/
/rules

Sample URL will be  http://example.com/game/v1/players

Microservice 2 - Results


## Mongo - Atlas

## Lambda


Here each microservice represented as a single lambda.

Deployment is straightforward for Lambda. You just have to Navigate to Lambda in AWS console and upload your application Zip.along with node_modules and code.  You can also give a s3 path of the code.

When you zip your package, make sure your index.js is correctly mapped which you give in handler. 

### Settings

Lambda console have many settings like memory, timeout .etc.  You can configure as per your application load.

VPC Settings:

Give VPC Settings if you have custom VPC for your application



## API Gateway

1) Give {proxy+} save changes - For all wildcard requests.

 When a create a new resource, click - Configure as proxy resource.


 {proxy+} is a greedy path wherein the entire sub-resource chain is passed to your backend as path variables.
(http://example.com/{proxy+} captures all of these sub-resources as path variables)
   For Example:
   •http://example.com/bikes/huffy/super-fast
   •http://example.com/bikes/cannondale/racing/street/cool-bike
   •http://example.com/wagon/radioflyer

You can also configure API Gateway for individual path depending on your use case.

2) Map the API Gateway to the Lambda

3) Your changes will not be reflected till you deploy. Don't forget to do it after every changes in API Gateway.

4) You can test your service from the generated URL


## Mapping Custom Domain Names


1) Get a ACM( AWS Certifcation Manager) Certificate is the first step

AWS needs ACM certificate to route the traffic to aws resources. 
Request a public certificate for your domain & Validation


If you yet to register the domain, register in Route 53, it makes the process further easy


2) Click -> Create Custom Domain Name 

Give following paths for the API Traffic to resolve domains like - api

    example.com,
    *.example.com,
    *.api.example.com,



1)  Route 53 registed domain. 
    
Click the  button - "Create Record in Route 53". AWS automatically updated the CNAMe record in ROUTE 53 for you.
Verification will take some time and automatically verified.

2) Other Registar

    Let's take an example - GoDaddy.
     
        1) You have an option 

            a) DNS Validation

             You have to manually update the DNS records in Godaddy Domain Manager
       

            b) Email Validation.  - This is straightforward process. Email will be sent to Domain registar'c contact email. Just you ahve to approve with the link. First try with Email Validation, if you are not getting the email, you can do via DNS Validation
