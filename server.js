'use strict'

const dotenv = require('dotenv')
const express = require('express')
const sherpabot = require("./src/sherpabot")

if (process.env.NODE_ENV !== 'production') {
   const result = dotenv.config({ path: './.env' })
   if (result.error) {
      throw result.error
   }
}

sherpabot()

const app = express()
app.get('/', (req, res) => {
   res
     .status(200)
     .send('Sherpabot is up and running!')
     .end()
 })
 
 // Start the server
 const PORT = process.env.PORT || 8080
 app.listen(PORT, () => {
   console.log(`Sherpabot listening on port ${PORT}`)
   console.log('Press Ctrl+C to quit.')
 })