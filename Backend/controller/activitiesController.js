import exerciseDAO from "../dao/exerciseDAO.js";
import stepDAO from "../dao/stepDAO.js"
import distanceDAO from "../dao/distanceDAO.js";
import caloriesDAO from "../dao/caloriesDAO.js";
import heartrateDAO from "../dao/heartrateDAO.js";

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
			res.send(exerciseList);
		})
	}

	/* 	returns exercise activity, duration, and start time in the the day passed in the paramater
		Used for Exercise summary info min box	*/
	static async getAllExerciseDuration(req, res, next) {
		await exerciseDAO.getAllExercises()
		.then(response => {
			let exerciseList = [];
			response.map(x => {
				if (x.startTime.substring(0, 10) == req.query["day"]){
					exerciseList.push({
						activityName: x.activityName, 
						value: Math.round(x.duration/60000), 
						dateTime: x.startTime,
						calories: x.calories
					})
				} 
			});
			res.send(exerciseList);
		})
	}

	static async getRingChartData(req, res, next) {
		await exerciseDAO.getAllExercises()
		.then(response => {
			let exerciseList = [];
			response.map(x => {
				if (x.startTime.substring(0, 10) == req.query["day"]){
					exerciseList.push({
						activityName: x.activityName, 
						value: Math.round(x.duration/60000), 
					})
				} 
			});
			res.send(exerciseList);
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

	static async getDailyCalories(req, res, next) {
		await caloriesDAO.getAllCalories()
		.then(days => {
			const result = Array.from(days.reduce((m, {dateTime, value}) => 
			m.set(dateTime.toISOString().substring(0, 10), (m.get(dateTime.toISOString().substring(0, 10)) || 0) + parseInt(value)), new Map), ([dateTime, value]) => ({dateTime, value}));
			res.send(result.reverse())
		})
	}

	static async getHeartRateByDay(req, res, next){
		await heartrateDAO.getAllHeartRate()
		.then(data => {
			let temp = []
			data.map(x => {
				if (x.dateTime_start.substring(0, 10) == req.query["day"]){
					temp.push(x)
				}
			})
			res.send(temp);
		})
	}

}