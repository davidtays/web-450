const express = require('express');
const router = express.Router();

let home_controller = require('../controllers/homeController');

router.post('/login', home_controller.employee_login);
router.post('/select', home_controller.get_quiz);
router.get('/selection', home_controller.get_quiz);
router.post('/getSummary', home_controller.get_user);
router.post('/updateSummary', home_controller.update_user_results);

module.exports = router;
