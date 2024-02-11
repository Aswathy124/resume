const mongoose=require("mongoose")
const resumeschema=new mongoose.Schema(

{
    name:String,
    age:String,
    mobile:String,
    address:String,
    mark:String,
    email:String,
    password:String,

}

)
module.exports=mongoose.model("resume",resumeschema)



