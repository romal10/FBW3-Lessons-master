const express = require('express');
const router = express.Router();
// @route   get api/users
// @desc    get all user contacts
// @access  private
router.post('/',(req ,res) => {
    res.send('get all contacts')
});


router.put('/:id',(req ,res) => {
    res.send('update contacts')
});


router.delete('/:id',(req ,res) => {
    res.send('delete contacts')
});


module.exports = router