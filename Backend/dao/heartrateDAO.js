import mongoose from "mongoose"
let heartRate, m;

export default class heartrateDAO {

	static async injectDB(id) {
		let schemaName = id + "heartrate";
		let Schema = mongoose.Schema;
		try{
			m = mongoose.model(schemaName);
		}catch(error){
			m = mongoose.model(schemaName, new Schema({
				dateTime_start: {type: String,},
				dateTime_end: {type: String},
				value: {type: Object}
			}), schemaName)
		}
		heartRate = await m.find();
		return true;
	}

	static async getAllHeartRate(req, res, next) {
		try {
		  	return heartRate
		} catch (e) {
		  	console.log(`api, ${e}`)
		  	res.status(500).json({ error: e })
		}
	}
}
