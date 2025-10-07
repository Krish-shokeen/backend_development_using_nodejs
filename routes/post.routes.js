const express = require('express');

const router = express.Router();

const{insertPost}= require("../controllers/post.controller");
// insert posts
router.post("/insert-posts",insertPost);

module.exports = router;