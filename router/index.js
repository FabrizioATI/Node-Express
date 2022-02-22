const express = require('express');
const notesRouter = require('./note')
const usersRouter = require('./user.js')

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/note', notesRouter);
  router.use('/user', usersRouter);
}

module.exports = routerApi;
