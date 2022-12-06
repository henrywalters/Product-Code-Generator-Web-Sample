const express = require('express')
const app = express()
const port = 1337

app.use(express.static('dist'));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Demo app listening at http://localhost:${port}`)
})
