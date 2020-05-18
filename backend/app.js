const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();
//e57iOa0vR0q0CkZB

//qQFu43vEQKfqc6zn
mongoose
  .connect(
    "mongodb+srv://isabel:qQFu43vEQKfqc6zn@cluster0-vsecr.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

module.exports = app;




// ---------------------------------------- DISCOVERY -------------------------------------------


const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: 'vJ3TCHIbGMop0uF5cCnpWKojqtSgLDNLU8EboF89QctK',
  }),
  url: 'https://api.us-south.discovery.watson.cloud.ibm.com/instances/8d6041d0-ed3a-46fc-9aaf-26c8488b9f9d',
});

const queryParams = {
  environmentId: '2615e1d4-5cce-455b-87b0-f48e2d0f06b8',
  collectionId: '3338e907-2a0f-440e-9ee0-cdbbc67a590f',
 // naturalLanguageUnderstanding: 'sarampo'
  //query: ``

//   'features': {
//     'categories': {},
//     //'keywords': {'limit':5},
//     'sentiment': {},
//     'concepts': {},
//     'entities': {
//       'model': 'b3dc5d51-4532-4bf0-a318-6c6edcb26af8'
//     },
//     'relations': {
//       'model': '4ba6448f-901d-4178-be56-3c465361963e'
//     }
// }



};





discovery.query(queryParams)
  .then(queryResponse => {
    console.log(JSON.stringify(queryResponse, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });






// ---------------------------------------- N L U -------------------------------------------

// const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
// const { IamAuthenticator } = require('ibm-watson/auth');

// const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
//   version: '2019-07-12',
//   authenticator: new IamAuthenticator({
//     apikey: 'oYmX4jGK2EbJuZkI8GzSQbJ-hRWnxTfqwfT3hj9SRTCk',
//   }),
//   url: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/0facd0a3-0566-4691-90f7-5022898a4281',
// });

// const analyzeParams = {
//   //'url': 'www.ibm.com',  // baixa html da pag e analiza
//   'text': `Doença viral aguda, caracterizada por febre e aumento de volume de uma ou mais glândulas salivares, geralmente a parótida e, às vezes, glândulas sublinguais ou submandibulares. Em homens adultos, ocorre orquiepididimite em aproximadamente 20% a 30% dos casos; em mulheres, pode ocorrer ooforite com menor frequência, acometendo cerca de 5% dos casos. Aproximadamente, 1/3 das infecções pode não apresentar aumento, clinicamente aparente, dessas glândulas. O sistema nervoso central, com frequência, pode estar acometido sob a forma de meningite asséptica, quase sempre sem sequelas. Mais raramente, pode ocorrer encefalite.`,    //caso seja texto ao inves de html
//   'features': {
//     'categories': {},
//     //'keywords': {'limit':5},
//     'sentiment': {},
//     'concepts': {},
//     'entities': {
//       'model': 'b3dc5d51-4532-4bf0-a318-6c6edcb26af8'
//     },
//     'relations': {
//       'model': 'b3dc5d51-4532-4bf0-a318-6c6edcb26af8'
//     }
//   }
// };

// naturalLanguageUnderstanding.analyze(analyzeParams)
//   .then(analysisResults => {
//     console.log(JSON.stringify(analysisResults, null, 2));
//   })
//   .catch(err => {
//     console.log('error:', err);
//   });
