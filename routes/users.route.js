const express = require('express');
const usersData = require('./../mock/users.mock');
const router = express.Router();
const authMdw = require('../middlewares/auth.mdw');

const checkUserRole = (req, res, next) => {
  const { role } = req.user; // Sử dụng thông tin người dùng đã xác thực
  if (role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Bạn không có quyền truy cập vào các API thêm/xóa/sửa.' });
  }
};

const checkWorkingHours = (req, res, next) => {
  const currentHour = new Date().getHours();
  if (currentHour >= 8 && currentHour <= 17) {
    next();
  } else {
    res.status(403).json({ message: 'Hiện tại không trong giờ làm việc.' });
  }
};

const countAPICalls = (req, res, next) => {
  req.session.countAPI = (req.session.countAPI || 0) + 1;
  next();
};

router.get('/all', (req, res) => {
  return res.json({ msg: 'success', data: usersData });
});

router.get('/search', (req, res) => {
  const { query } = req;
  const findData = usersData.filter(
    user =>
      user.uname.includes(query.key) ||
      user.fname.includes(query.key)
  );
  return res.json({ msg: 'success', data: findData });
});

router.use('/create', authMdw, checkUserRole, checkWorkingHours, countAPICalls);
router.use('/update/:uname', authMdw, checkUserRole, checkWorkingHours, countAPICalls);
router.use('/del/:uname', authMdw, checkUserRole, checkWorkingHours, countAPICalls);

router.post('/create', (req, res) => {
  const { body } = req;
  usersData.push(body);
  return res.json({ msg: 'success', data: usersData });
});

router.put('/update/:uname', (req, res) => {
  const { body, params } = req;
  const index = usersData.findIndex(user => user.uname === params.uname);
  if (index === -1) {
    return res.status(404).json({ msg: 'fail' });
  }
  usersData[index] = {
    ...usersData[index],
    ...body
  };
  return res.json({ msg: 'success', data: usersData });
});

router.delete('/del/:uname', (req, res) => {
  const { params } = req;
  const index = usersData.findIndex(user => user.uname === params.uname);
  if (index === -1) {
    return res.status(404).json({ msg: 'fail' });
  }
  usersData.splice(index, 1);
  return res.json({ msg: 'success', data: usersData });
});

const authenticate = (req, res, next) => {
  if (req.user.role === 'GUEST') {
    next();
  } else {
    res.status(403).json({ message: 'Bạn không có quyền truy cập.' });
  }
};

router.get('/movies', authenticate, (req, res) => {
  // Xử lý yêu cầu khi người dùng đã xác thực
});

router.get('/no-access', (req, res) => {
  // Xử lý yêu cầu khi người dùng không có quyền truy cập
});

module.exports = router;