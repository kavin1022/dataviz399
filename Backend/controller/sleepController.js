
import sleepDAO from "../dao/sleepDAO.js";
export default class ActivitiesController {

	static async getAllSleep(req, res, next) {
		await sleepDAO.getAllSleeps()
		.then(days => {
			res.send(days)
		})
	}

	static async getSleepDuration(req, res, next) {
		await sleepDAO.getAllSleeps()
		.then(response => {
			let temp = [];
			response.map(x => 
				temp.push({	
					dateTime: x.dateOfSleep,
					duration: Math.round(x.duration/3600000 * 100)/100,
					startTime: x.startTime,
					endTime: x.endTime,
					efficiency: x.efficiency
				})
			)
			res.send(temp)
		})
	}



}