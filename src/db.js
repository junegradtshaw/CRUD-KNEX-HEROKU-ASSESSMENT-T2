// var db = require('pg');
var knex = require ('knex')({
  client:'pg',
  connection: 'postgres://localhost/posts_development'
});

function Posts() {
  return knex('posts');
}

function Comments() {
  return knex('comments');
}

function post(post_id) {
  console.log(post_id)
  return (Posts().where('id', post_id ))
}

function insert_post(post) {
  return(Posts().insert(post));
}

function update_post(id, post) {
  console.log('id is ', id, 'post is ', post,'*******');
  return(Posts().where('id', id).first().update(post))
}

function delete_post(id) {
  console.log('id is ', id, 'post is ', post,'*******');
  return(Posts().where('id', id).del(post))
}

function post(post_id) {
  console.log(post_id)
  return (Posts().where('id', post_id ))
}


function comment(comment_id) {
  console.log(comment_id)
  return (Comments().where('id', comment_id ))
}

function insert_comment(comment) {
  return(Comments().insert(comment));
}

function update_comment(id, comment) {
  console.log('id is ', id, 'comment is ', comment,'*******');
  return(Comments().where('id', id).first().update(comment))
}

function delete_comment(id) {
  console.log('id is ', id, 'comment is ', comment,'*******');
  return(Comments().where('id', id).del(comment))
}

function review_comments(id) {
  console.log(in review comments)
  return(knex('posts').rightJoin('comments', 'post.id', 'comments.post_id').where('comments.post_id', id).select('comments.commenter', 'comments.body'))
}

module.exports = {
  Posts: Posts,
  insert_post: insert_post,
  post: post,
  update_post: update_post,
  delete_post: delete_post,
  Comments: Comments,
  insert_comment: insert_comment,
  comment: comment,
  update_comment: update_comment,
  delete_comment: delete_comment,
  review_comments: review_comments
}
