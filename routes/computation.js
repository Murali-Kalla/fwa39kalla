var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let result=""
  if(Object.entries(req.query).length === 0){
    let rand = Math.random() * 100
    res.render('computation', { result: `Math.abs applied to ${rand} is ${Math.abs(rand)}` });
  
} else{
  for (const key in req.query) {
    console.log(req.query)
    result+= `Math.abs applied to ${req.query[key]} is ${Math.abs(req.query[key])} `
  }
  res.render('computation', { result: result});
}
});

module.exports = router;