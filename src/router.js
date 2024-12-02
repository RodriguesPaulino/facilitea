const express = require('express');
const RoutesPublics = require('./routes/RoutesPublics');
const RoutesPrivates = require('./routes/RoutesPrivates');

const router = express.Router();

router.use('/login', RoutesPublics); 
router.use('/usuarios', RoutesPrivates); 

module.exports = router;
