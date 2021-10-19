import User from "../model/user.js"

import distanceDAO from "../dao/distanceDAO.js";
import exerciseDAO from "../dao/exerciseDAO.js";
import StepDAO from "../dao/stepDAO.js";
import caloriesDAO from "../dao/caloriesDAO.js";

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

                    StepDAO.injectDB(user.username);
                    exerciseDAO.injectDB(user.username);
                    distanceDAO.injectDB(user.username);
                    caloriesDAO.injectDB(user.username);

                   res.send({message:"login success",user:user});
               }else{
                   res.send({message:"wrong credentials"})
               }
            }else{
                res.send({message:"user doesn't exist"})
            }
        })
    }
}