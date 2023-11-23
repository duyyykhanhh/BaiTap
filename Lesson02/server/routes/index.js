const express = require('express');
const postRouter = require('./posts.route')
const userRouter = require('./users.route')

const router = express.Router();

router.use('/post', postRouter);
router.use('/user', userRouter)

module.exports = router;
