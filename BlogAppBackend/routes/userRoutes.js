const express = require('express');
const router = express.Router();
const userModel = require('../model/userData');
router.use(express.json())
const jwt= require('jsonwebtoken')



router.post('/login', async (req, res) => {
        const user = await userModel.findOne({email:req.body.email});
        if(!user){
            return res.status(404).send({message:'User not found'});
        }
        try{
            if(user.password==req.body.password){
                const payload= {email:user.email, password:user.password}
                const token= jwt.sign(payload, 'secret')  //'secret' is a secretkey 
                res.status(200).send({message:'Login successful',myToken: token});
            }else{
                res.status(400).send({message:'This is Invalid login'})
            }
        }catch(error){
            console.log(error)
        }
});


module.exports = router;