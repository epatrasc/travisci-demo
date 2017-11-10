const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('<h1>Hello World!</h1><p><a href="/about">About</a></p>'))
app.get('/about', (req, res) => res.send('<h1>This is the about page</h1><a href="/">Go Back</a></p>'))
app.listen(3000, () => console.log('App listening on http://localhost:3000/'))
