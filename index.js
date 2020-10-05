const express = require('express');
const app = express();
const router = require('./routes/index');
const hbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/', router);

app.listen(
    PORT,
    () => {
        console.log(`Listening to port ${PORT}`);
    }
);
