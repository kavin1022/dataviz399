import mongoose from "mongoose"
let sleep, m;

export default class sleepDAO {

  	static async injectDB(id) {
		const schemaName = id + "sleep";
		let Schema = mongoose.Schema;
		try{
			m = mongoose.model(schemaName);
		}catch(error){
			m = mongoose.model(schemaName, new Schema({
				logId: {type: Number},
				dateOfSleep: {type: String},
				startTime: {type: String},
				endTime: {type: String},
				duration: {type: Number},
				minutesToFallAsleep: {type: Number},
				minutesAsleep: {type: Number},
				minutesAwake: {type: Number},				
				minutesAfterWakeup: {type: Number},
				timeInBed: {type: Number},
				efficiency: {type: Number},
				type: {type: String},
				infoCode: {type: Number},				
				levels: {type: Object},
				mainSleep: {type: Boolean},
			}), schemaName)
		}
		sleep = await m.find();
		return true;
	}

	static async getAllSleeps(req, res, next) {
		try {
			let newsleeps = sleep
		  	return(newsleeps)
		} catch (e) {
		  	console.log(`api, ${e}`)
		  	res.status(500).json({ error: e })
		}
	}
}
