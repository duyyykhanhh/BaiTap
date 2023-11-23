const express = require('express')
require('dotenv').config()
const apiV1Router = require('./routes/index')
// const cors = require('cors')
const app = express()

// app.use(cors())
app.use(express.json())
// app.use('/', function(req, res) {
//     var url = 'https://' +
//       req.get('host').replace('localhost:80', 'servername.domain:11121') + 
//       req.url
//     req.pipe(request({ qs:req.query, uri: url })).pipe(res);
//   })
const PORT = 3002;

app.use('/api/v1', apiV1Router)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(process.env.PASS)
})