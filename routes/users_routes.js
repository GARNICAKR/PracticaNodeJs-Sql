const express =require("express");
let UsersController=require('../controllers/users')
let router=express.Router();
router.route('/users').get((req,res)=>{
    res.send("HOLAAAAa");
}).post(UsersController.create);
module.exports=router;