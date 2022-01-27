const express = require('express');
const mongoose = require('mongoose');
const Community = require('./models/Community');
const server = express();

require('dotenv').config();
server.use(express.json());


var cors = require('cors')

// Access-Control-Allow-Origin 적용방법1: 직접 헤더에 적용
server.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

// Access-Control-Allow-Origin 적용방법2: cors 미들웨어 사용
server.use(cors())


server.get('/', (req, res) => {
  console.log(req.body);
  const newCommunity = new Community();
  newCommunity.userName = "홍길동";
  newCommunity.contentsTitle = "Sample Title 1";
  newCommunity.contextsText = "Sample Contents 1";
  newCommunity.goodPoint = 5;
  console.log(newCommunity)
  newCommunity.save()
    .then((community) => {
      console.log(community);
      res.json({
        message: "Community Created Successfully"
      });
    })
    .catch((err) => {
      res.json({
        message: "Community was not successfully created"
      });
    });
});

server.post('/community', async (req, res) => {
  const community = new Community(req.body);
  console.log(req.body);
  try {
      await community.save();
      res.send("complete");
  } catch (error) {
    res.status(500).send(err);
  }

});

server.get('/community/get', async (req, res) => {
  const community = await Community.find({});

  try {
    res.send(community);
  } catch (error) {
    res.status(500).send(err);
  }
})


server.listen(3000, (err) => {
  if(err) {
    return console.log(err);
  } else {
    mongoose.connect(process.env.MONGODB_URL, (err) => {
      if(err) {
        console.log("Err", err);
      } else {
        console.log("Connection Successful");
      }
    });
  }
});