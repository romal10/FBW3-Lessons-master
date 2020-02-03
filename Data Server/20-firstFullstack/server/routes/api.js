var express = require('express');
var router = express.Router();
const MovieReview; require('../models/MovieReview');


/* GET users listing. */
router.get('/list', async(req, res, next) => {
  let ReviewList = await MovieReview.find();

  res.send(ReviewList)
});

router.post ('/newReview', (re, res, next)=> {
  let {Title,rating, comment} = req.body;
  let newReview = new MovieReview({
    Title:Title,
    rating:parseInt(rating),
    comment:comment

  })
  newReview.save()
  .then(response => {
    console.log(response)
    res.send({msg: 'done'})
  })
  .catch(err=>{
    console.log(err)
    res.send({msg:err})
  })
})

router.delete('/deleteMovie', async(req, res, next)=>{
  let id = req.body.id
  await MovieReview.findByIdAnddelete({id:id})
  .then(response => {
    res.send({msg:'Movie review delted'})
  })
  .catch(err=>{
    res.send({msg:err})
  })
})


module.exports = router;
