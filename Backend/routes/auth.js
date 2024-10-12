const express = require('express');
const router = express.Router();
const {loginUser, registerUser, verifyOtp}= require('../controllers/auth');


router.post('/signin', registerUser);
router.post('/login',loginUser);
router.post('/verifyOTP', verifyOtp);

module.exports = router;