const express = require('express')
const Joi = require('joi')

const app = express()

app.post('/login', (req, res, next) => {

})

app.post('/logout', (req, res, next) => {

})

app.get('/items/', (req, res, next) => {
  Joi.object({

  })
  const { } = req.query
})

app.listen(3001, () => {
  console.log('listened')
})