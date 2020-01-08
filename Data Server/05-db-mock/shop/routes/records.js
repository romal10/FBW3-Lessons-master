var express = require('express');
var router = express.Router();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('data/db.json');
const db = low(adapter);
let data = db.get('records');

/* GET records listing. */
router.get('/', function (req, res, next) {
  // res.send('the dummy page for records');
  res.status(200).send(data);
});

/* GET particular record using id */
router.get('/:id', function (req, res) {
  // filtering
  let item = data.filter(function (i) {
    //return i.id == req.params.id;
    if (i.id == req.params.id) {
      return true;
    }
  });
  res.status(200).send(item);
});

/* POST a new record */
router.post('/', function (req, res) {
  let title = req.body.title;
  let price = req.body.price;
  console.log(title);
  console.log(price);
  let count = db.get('count'); //
  console.log(count);
  
  db.get('records').push(
    {
      id: count,
      title: title,
      price: price
    }
  ).write();

  // Increment count
  db.update('count', n => n + 1)
  .write()
  
  res.status(200).send('database has been updated');
});

router.post('/delete', function (req, res) {
  let id = parseInt(req.body.id);
  console.log(id);
  console.log(typeof id);
  
  db.get('records').remove({id: id}).write();
  res.status(200).send('you have removed item ' + id);
});





module.exports = router;
