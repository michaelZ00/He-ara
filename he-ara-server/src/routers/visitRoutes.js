const express = require('express');
const router = express.Router();
const visitController = require('../controllers/visitController');


router.post('/track-visit', visitController.trackVisit);

module.exports = router;