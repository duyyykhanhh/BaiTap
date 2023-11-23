const express = require('express');
const usersData = require('./../mock/users.mock')
const router = express.Router();

router.get('/all', (req, res) => {
    return res.json('Danh hoc sinh')
})

router.post('/create', (req, res) => {
    const demoUser =     {
        uname: 'vivt2',
        fname: 'Vo Tuong Vi 2'
    }

    usersData.push(demoUser);
    return res.json(usersData)
})

router.put('/update', (req, res) => {
    const demoUser =     {
        uname: 'vivt1',
        fname: 'Vo Tuong Vi update'
    }
    let index = usersData.findIndex((user) => user.uname === demoUser.uname);
    if (index === -1) {
        return res.status(404).json({msg: 'fail'})
    }
    usersData[index] = {
        ...usersData[index],
        ...demoUser
    }
    let _tempArr = []
    usersData = _tempArr
    return res.json(usersData)
})

router.delete('/del', (req, res) => {
    return res.json('Xoa hoc sinh')
})

module.exports = router;