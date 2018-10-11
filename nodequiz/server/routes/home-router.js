const express = require('express');
const router = express.Router();

let home_controller = require('../controllers/homeController');

router.get('/login', home_controller.employee_login);

module.exports = router;
