var express = require('express');
var uid = require('uid-safe');
var router = express.Router();



/*GET a guid*/
router.get('/', function(req, res, next){
    
    var strUiD = uid.sync(18);
    console.log(strUiD);
    res.json({guid: strUiD});
});

module.exports = router;