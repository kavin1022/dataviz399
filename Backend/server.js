import express from "express"
import cors from "cors"
import step from "./api/step.route.js"
import User from "./model/user.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const app = express()

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/login", (req, res) => {
    const userLoggingIn = req.body;
    User.findOne({username: userLoggingIn.username})
    .then(dbUser=>{
        if(!dbUser){
            return res.json({
                message: "Incorrect Username"
            })
        }
        bcrypt.compare(userLoggingIn.password, dbUser.password)
        .then(isCorrect =>{
            if(isCorrect){
                const payload = {
                    id: dbUser._id,
                    username: dbUser.username
                }
                jwt.sign(
                    payload,
                    process.env.JWT_SECERT,
                    {expiresIN: 86400},
                    (err, token) => {
                        return res.json({
                            message: "Success",
                            token: "Bearer" + token
                        })
                    }
                )
            }else{
                return res.json({
                    message: "Invalid Username or Password"
                })
            }

        })

    })
})

app.post("/Register",(req,res)=>{
    console.log(req.body) 
    const {username,password} =req.body;
    User.findOne({username:username},(err,user)=>{
        if(user){
            res.send({message:"user already exist"})
        }else {
            const user = new User({username,password})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })


}) 

app.use("/api/step", step)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app