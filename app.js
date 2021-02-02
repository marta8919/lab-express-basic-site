const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public') )


app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (req, res)=> {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/work', (req, res)=> {
    res.sendFile(__dirname + '/views/work.html')
})

app.use(function(req, res, next) {
    res.status(404).send('Sorry, page not found...Blame our developer');
});

app.listen(3000)