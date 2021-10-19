import mongoose from "mongoose"
let exercise, m;

export default class exerciseDAO {

  	static async injectDB(id) {
		const schemaName = id + "exercises";
		let Schema = mongoose.Schema;
		try{
			m = mongoose.model(schemaName);
		}catch(error){
			m = mongoose.model(schemaName, new Schema({
				logId: {type: Number},
				activityName: {type: String},
				activityTypeId: {type: Number},
				activityLevel: {type: Array},
				averageHeartRate: {type: Number},
				calories: {type: Number},
				duration: {type: Number},
				activeDuration: {type: Number},
				steps: {type: Number},
				logType: {type: String},
				manualValuesSpecified: {type: Object},
				heartRateZones: {type: Array},
				lastModified: {type: String},
				startTime: {type: String},
				originalStartTime: {type: String},
				originalDuration: {type: Number},
				elevationGain: {type: Number},
				hasGps: {type: Boolean},
				shouldFetchDetails: {type: Boolean},
			}), schemaName)
		}

		exercise = await m.find();
		return true;
	}

	static async getAllExercises(req, res, next) {
		try {
		  	return(exercise)
		} catch (e) {
		  	console.log(`api, ${e}`)
		  	res.status(500).json({ error: e })
		}
	}
}
