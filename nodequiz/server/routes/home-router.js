const express = require('express');
const router = express.Router();

let home_controller = require('../controllers/homeController');

router.post('/login', home_controller.employee_login);
router.post('/select', home_controller.get_quiz);
router.get('/selection', home_controller.get_quiz);

module.exports = router;
