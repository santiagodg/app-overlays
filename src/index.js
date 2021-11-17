const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(express.static('src/public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/output', (req, res) => {
    res.render('output')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
