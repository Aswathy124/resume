const mongoose=require("mongoose")
const resumeschema=mongoose.Schema(
    {
        userid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"users"
        },
        name:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        experience:{
            type:String,
            required:true
        },
        postgraduation:{
            type:String,
            required:true
        },
        graduation:{
            type:String,
            required:true
        },
        plustwo:{
            type:String,
            required:true
        },
        tenth:{
            type:String,
            required:true
        },
        certifications:{
            type:String,
            required:true
        },
        extracaricular:{
            type:String,
            required:true
        },
        postedDate:{
            type:Date,
            default:Date.now
        }
    }
)
module.exports=mongoose.model("users",resumeschema)



