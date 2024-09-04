const express = require('express')

const app = express();

const port =3000

app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.get('/twitter', (req, res) =>{
    res.send('hiteshdotcom')
})

app.get('/login', (req, res) =>{
    res.send('<h1> Please login </h1>')
})
app.get('/youtube', (req, res) =>{
    res.send('<h1> Welcome to Youtube')
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})

