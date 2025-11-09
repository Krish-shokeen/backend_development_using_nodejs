const express = require('express');

const router = express.Router();

const{insertPost}= require("../controllers/post.controller");
// insert posts
router.post("/insert-posts",insertPost);
// sort posts by title in ascending order
const{sortPosts}= require("../controllers/post.controller");

router.get("/posts-sorted",sortPosts);

module.exports = router;