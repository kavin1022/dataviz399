import exerciseDAO from "../dao/exerciseDAO.js";
import stepDAO from "../dao/stepDAO.js"
import distanceDAO from "../dao/distanceDAO.js";

export default class ActivitiesController {

	static async getLineChartSteps(req, res, next) {
		await stepDAO.getAllSteps()
		.then(days => {
			const result = Array.from(days.reduce((m, {dateTime, value}) => 
			m.set(dateTime.toISOString().substring(0, 10), (m.get(dateTime.toISOString().substring(0, 10)) || 0) + parseInt(value)), new Map), ([dateTime, value]) => ({dateTime, value}));
			res.send(result.reverse())
		})
	}

	static async getAllExercises(req, res, next) {
		await exerciseDAO.getAllExercises()
		.then(response => {
			let exerciseList = [];
			response.map(x => exerciseList.push(x.activityName));
			console.log(exerciseList);
			res.send("success");
		})
	}

	static async getDailyDistance(req, res, next) {
		await distanceDAO.getAllDistances()
		.then(days => {
			const result = Array.from(days.reduce((m, {dateTime, value}) => 
			m.set(dateTime.toISOString().substring(0, 10), (m.get(dateTime.toISOString().substring(0, 10)) || 0) + parseInt(value) / 100000), new Map), ([dateTime, value]) => ({dateTime, value}));
			res.send(result.reverse())
		})
	}

}