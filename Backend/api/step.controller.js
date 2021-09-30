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
}