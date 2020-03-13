const express = require('express');
const router = express.Router();
const personalController = require('../controller/personal.controller');


router.get('/', personalController.getPersonales);
router.post('/', personalController.createPersonal);
router.get('/:id', personalController.getPersonal);
router.put('/:id', personalController.updatePersonal);
router.delete('/:id', personalController.deletePersonal);


module.exports = router;