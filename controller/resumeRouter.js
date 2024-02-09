const express=require("express")
const resumemodule=require("../models/resumemodel")
const router=express.Router()
const bcrypt=require("bcryptjs")
const resumemodel = require("../models/resumemodel")
hashpaswwordgenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)

}

router.post("/signup",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    hashpaswwordgenerator(password).then(
   (hasedpassword)=>{
    console.log(hasedpassword)
    data.password=hasedpassword
    console.log(data)
    let user=new resumemodel(data)
    let result=user.save()
   }
)


res.json({status:"sucessfully signuped"})
})

module.exports=router