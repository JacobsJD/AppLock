const parser = require('body-parser');
const path = require('path');
const express = require('express');

const PORT = 2222;
const app = express();

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(express.static(path.join(__dirname, '../client/dist/')))

app.listen(PORT, err => {
    err? console.log('error:', err) : console.log('listening on port ', PORT);
})