const express = require('express');

const router = express.Router();

router.get('/all', (req, res) => {
    return res.json('Danh sach bai viet')
})// lay danh sach - READ

router.post('/create', (req, res) => {
    return res.json('Them  bai viet')
}) // tao moi - CREATE

router.put('/update', (req, res) => {
    return res.json('Cap nhat bai viet')
}) // cap nhat - UPDATE

router.delete('/del', (req, res) => {
    return res.json('Xoa bai viet')
}) // xoa - DELETE
// CRUD
module.exports = router;