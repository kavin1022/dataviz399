import User from "../model/user.js"

import distanceDAO from "../dao/distanceDAO.js";
import exerciseDAO from "../dao/exerciseDAO.js";
import StepDAO from "../dao/stepDAO.js";
import caloriesDAO from "../dao/caloriesDAO.js";
import sleepDAO from "../dao/sleepDAO.js";

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
                    const a = StepDAO.injectDB(user.username);
                    const b = exerciseDAO.injectDB(user.username);
                    const c = distanceDAO.injectDB(user.username);
                    const d = caloriesDAO.injectDB(user.username);
                    const f = sleepDAO.injectDB(user.username);
                    Promise.all([a, b, c, d, f])
                    .then(() => {
                        res.send({message:"login success",user:user});
                    })
               }else{
                   res.send({message:"wrong credentials"})
               }
            }else{
                res.send({message:"user doesn't exist"})
            }
        })
    }
        
}