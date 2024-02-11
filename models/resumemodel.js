const mongoose=require("mongoose")
const signschema=mongoose.Schema(
    {
        userid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"users"
        },
        
            post:{
                type:String,
                required:true
            },
            postedDate:{
                type:Date,
                default:Date.now
            }

            
        
    }
)
module.exports=mongoose.model("sign",signschema)