const IS_LOGIN = false;
const hanldeAuthMdw = (req, res, next) => {
    if (IS_LOGIN) {
        // code here
        // requestedAt -> ngay yeu cau
        // role -> phan quyen
        next()
    };
    return res.status(400).json({msg: 'Not allow!!'})
}

module.exports = hanldeAuthMdw;