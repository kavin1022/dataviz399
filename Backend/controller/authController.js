import User from "../model/user.js"

export default class authController {

	static async register(req, res, next) {
        const {username, password, stepsData} = req.body;
        User.findOne({username:username},(err,user)=>{
            if(user){
                res.send({message:"user already exist"})
            }else {
                const user = new User({username, password, stepsData})
                user.save(err=>{
                    if(err){
                        res.send({message:"error"})
                    }else{
                        res.send({message:"sucessfull"})
                    }
                })
            }
        })
	}

    static async login(req, res, next) {
        const {username,password} =req.body;
        User.findOne({username:username},(err,user)=>{
            if(user){
               if(password === user.password){
                   res.send({message:"login success",user:user})
               }else{
                   res.send({message:"wrong credentials"})
               }
            }else{
                res.send({message:"user doesn't exist"})
            }
        })
    }
}