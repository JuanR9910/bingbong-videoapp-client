'use strict'

// creating a base name for the mongodb
// REPLACE THE STRING WITH YOUR OWN DATABASE NAME
const mongooseBaseName = 'express-auth-template'

// create the mongodb uri for development and test
const database = {
  development:
    "mongodb+srv://tgm98:1532@cluster0.ldlwy.mongodb.net/bingbong-videoapp?retryWrites=true&w=majority",
  test: "mongodb+srv://tgm98:1532@cluster0.ldlwy.mongodb.net/bingbong-videoapp?retryWrites=true&w=majority",
}

// Identify if development environment is test or development
// select DB based on whether a test file was executed before `server.js`
const localDb = process.env.TESTENV ? database.test : database.development

// Environment variable MONGODB_URI will be available in
// heroku production evironment otherwise use test or development db
const currentDb = process.env.MONGODB_URI || localDb

module.exports = currentDb
