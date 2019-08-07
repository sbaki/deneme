var express =require ('express');
var router = express.Router();
var controller = require('../controller/ElectronicController');

router.use(function(req,res,next){

    req.deneme = "Selamlar"; 

    next ();

});

router.get('/', controller.index);
router.get('/bilgisayar',controller.bilgisayar);

module.exports=router;