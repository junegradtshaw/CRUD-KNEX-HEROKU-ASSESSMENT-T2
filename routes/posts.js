var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../src/db.js')



router.get('/', function(req, res, next) {
  db.Posts().select().then(function (posts) {
    res.json({'SUCCESS': posts });
  })
});

router.post('/', function(req, res, next) {
  db.insert_post(req.body).then(function() {
  res.redirect('/');
  })
})

router.get('/:id', function(req, res, next) {
  db.post(req.params.id).first().then(function(post) {
    console.log('post = ', post);
    res.json({SUCCESS: post})
  })
})

router.get('/:id/edit', function(req, res, next) {
  db.post(req.param.id).first().then(function(post) {
    console.log('post = ', post);
  res.json({SUCCESS: post})
  })
})

router.post('/:id', function (req, res, next)
{
  console.log('in the post!!!');
  db.update_post(req.params.id, req.body).then(function(result) {
    res.redirect('/');
  })
})

router.post('/:id/delete',function(req, res, next) {
  db.delete_post(req.params.id).then(function(result){
    res.redirect('/');
  })
})

module.exports = router;
