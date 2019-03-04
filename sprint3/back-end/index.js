const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use('/videos', require('./routes/videos'));

app.listen(8080, () => {
  console.log('app running on http://localhost:8080');
})