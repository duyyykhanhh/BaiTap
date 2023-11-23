const express = require('express');
const postRouter = require('./posts.route')
const userRouter = require('./users.route')
const logMdw = require('../middlewares/logger.mdw')
const router = express.Router();

router.use('/post', postRouter);
router.use('/user', logMdw ,userRouter);

module.exports = router;
