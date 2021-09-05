import stepDAO from "../dao/stepDAO.js"

export default class StepController {
  	static async getAllSteps(req, res, next) {
	  	const step = await stepDAO.getAllSteps()
    	res.json(step)
  }
}