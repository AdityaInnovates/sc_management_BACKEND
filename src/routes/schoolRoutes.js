const express = require('express');
const router = express.Router();
const { addSchool, listSchools } = require('../controllers/schoolController');
const { validateSchool, validateCoordinates } = require('../middleware/validate');

router.post('/addSchool', validateSchool, addSchool);
router.get('/listSchools', validateCoordinates, listSchools);

module.exports = router;
