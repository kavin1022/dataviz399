import stepDAO from "../dao/stepDAO.js"

export default class StepController {
	static async getAllSteps(req, res, next) {
		const step = await stepDAO.getAllSteps()
		res.json(step)
	}

	static async getLineChartSteps(req, res, next) {
		const step = await stepDAO.getAllSteps()

		const result = Array.from(step.reduce((m, {dateTime, value}) => 
		m.set(dateTime.substring(0, 10), (m.get(dateTime.substring(0, 10)) || 0) + parseInt(value)), new Map), ([dateTime, value]) => ({dateTime, value}));
		
		res.json(result)
	}

	static async reg(req, res, next) {
		const user = new User({username: "un", password: "pw"})
		user.save(err=>{
			if(err){
				console.log(err)
				res.send(err)
			}else{
				res.send({message:"sucessfull"})
			}
		})
	}
}