const express = require('express');
const router = express.Router();
const videos = require('../data/videos');
var uniqid = require('uniqid');

const app = express();

app.use(express.static('public'));

router.get('/', (req, res) => {
  res.json(videos);
})

router.get('/:id', (req, res) => {
  const videoId = req.params.id;
  res.json(videos.filter(obj => {
    return obj.id === videoId
  }));
})

router.post('/', (req, res) => {
  const newVideo = {
    id: uniqid(),
    title: req.body.title,
    channel: 'Brainstation',
    image: '/assets/Images/upload-video-preview.jpg',
    description: req.body.description,
    views: '0',
    likes: '0',
    duration: '4:01',
    video: 'https://project-2-api.herokuapp.com/stream?api_key=koeun-lee',
    timestamp: Date.now(),
    comments: []
  }
  videos.push(newVideo);
  res.json(newVideo);
})

module.exports = router;