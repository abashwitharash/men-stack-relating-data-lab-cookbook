const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
// router logic will go here - will be built later on in the lab
router.get('/', (req, res) => {
    res.render('foods/index.ejs');
  });
router.get('/users/:userId/foods/new', (req, res) => {
    res.render('foods/new.ejs')
})
router.post('/users/:userId/foods', (req, res) => {
    const user = req.session.user
})
module.exports = router;