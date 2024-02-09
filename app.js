const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const resumeRouter=require("./controller/resumeRouter")
const signRoute=require("./controller/signRouter")
const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://achu:Harifa123@cluster0.6jzim5t.mongodb.net/resumeDb?retryWrites=true&w=majority",

{
    useNewUrlParser:true
}
    
)


app.use("/api/resume",resumeRouter)

app.use("/api/sign",signRoute)


app.listen(3001,()=>{
    console.log("server running")
})