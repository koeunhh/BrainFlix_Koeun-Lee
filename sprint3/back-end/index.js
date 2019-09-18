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

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('app running on port:' + PORT);
})