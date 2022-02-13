require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const router = express.Router();
const Polygon = require('./models/polygon');

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
router.get('/polygon',function(req,res){
  Polygon.find({}).then( polygonRes => {
    res.json(polygonRes)
  })
  /*
  const polygons = [
    {polygons:[600, 370, 700, 460, 780, 420, 730, 570, 590, 620],color:'0xFF00FA'}
  ];
  res.send(polygons);
  */
});

//add the router
app.use('/', router);
app.listen(process.env.PORT || 3001);

console.log('Running at Port 3000');
