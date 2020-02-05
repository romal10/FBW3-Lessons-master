const express = require('express');
const router = express.Router();
// @route   get api/users
// @desc    Register a user
// @access  private
router.get('/',(req ,res) => {
    res.send('Get loggedin a user')
});
// post api 
// desc
// access
router.post('/',(req ,res) => {
    res.send(' log in a user')
});

module.exports = router