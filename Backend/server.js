import express from "express"
import cors from "cors"
import step from "./api/step.route.js"
import User from "./model/user.js"

const app = express()

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/Login",(req,res)=>{
    const {username,password} =req.body;
    User.findOne({username:username},(err,user)=>{
        if(user){
           if(password === user.password){
               res.send({message:"login sucess",user:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("user not registered")
        }
    })
});

app.post("/register",(req,res)=>{
    console.log(req.body) 
    const {username,password} = req.body;
    User.findOne({username:username},(err,user)=>{
        if(user){
            res.send({message:"user already exist"})
        }else {
            const user = new User({username,password})
            user.save(err=>{
                if(err){
                    res.send({message:"error"})
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })
})

app.post("/makeuser",(req,res)=>{

    const user = new User({username: "un", password: "pw"})
    user.save(err=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            res.send({message:"sucessfull"})
        }
    })
}) 

app.use("/api/step", step)
app.use("*", (req, res) => res.status(404).json({ error: "not founds"}))

export default app