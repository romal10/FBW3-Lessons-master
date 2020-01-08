var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function (req, res, next) {
    res.render('person', { ID: req.params.id });
});

router.get('/', function (req, res, next) {
    res.render('person', { ID: 'the default person DCI' });
});

module.exports = router;
