const app = require('express')()

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/navbar', (req, res) => {
  res.render('nav-bar')
})

app.use(function(req, res, next){
  res.status(404);
  res.render('404')

    }
);


const port = process.env.PORT || 5656;
app.listen(port, () => {
    console.log(`see the page at: http://localhost:${port}`)
})
