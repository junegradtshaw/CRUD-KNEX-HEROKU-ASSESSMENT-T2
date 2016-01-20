var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../src/db.js')



router.get('/', function(req, res, next) {
  db.Comments().select().then(function (comments) {
    res.json({'SUCCESS': comments });
  })
});


router.post('/', function(req, res, next) {
  db.insert_comment(req.body).then(function() {
  res.redirect('/');
  })
})

router.get('/:id', function(req, res, next) {
  db.comment(req.params.id).first().then(function(comment) {
    console.log('post = ', comment);
    res.json({SUCCESS: comment})
  })
})

router.get('/:id/edit', function(req, res, next) {
  db.comment(req.param.id).first().then(function(comment) {
    console.log('comment = ', comment);
  res.json({SUCCESS: comment})
  })
})

router.post('/:id', function (req, res, next)
{
  console.log('in the post!!!');
  db.update_comment(req.params.id, req.body).then(function(result) {
    res.redirect('/:id');
  })
})

router.post('/:id/delete',function(req, res, next) {
  db.delete_comment(req.params.id).then(function(result){
    res.redirect('/:id');
  })
})

router.get('/:id/comments') {
  console.log('****** in the comment path')
  db.review_comments(req.params.id).then(function(comments) {
    console.log('here are the comments', comments);
    res.json({'SUCCESS': comments })
  }
}

module.exports = router;
