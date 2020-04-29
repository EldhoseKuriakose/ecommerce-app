const express = require('express');

//Setting up express router
const router = express.Router();
const apiRouter = require('./api/v1/index');

router.use('/products', apiRouter);

module.exports = router;
