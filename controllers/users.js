const User=require('../models').User;
module.exports={
    create: function(req,res){
        User.create({
            name:req.body.name,
            password:req.body.password
        }).then(result=>{
            res.json(result);
         }).catch(err=>{
             console.log(err);
             res.json(err);
         })
        }
};