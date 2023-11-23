const handleLog = (req, res, next) => {
    console.log('An API is comming at ' + new Date())
    next()
}

module.exports = handleLog;