import mongoose from "mongoose"
let distance, m;

export default class distanceDAO {

	static async injectDB(id) {
		const schemaName = id + "distances";
		let Schema = mongoose.Schema;
		try{
			m = mongoose.model(schemaName);
		}catch(error){
			m = mongoose.model(schemaName, new Schema({
				dateTime: {
					type: Date,
					required: true
				},
				value: {
					type: Number,
					required: true
				}
			}), schemaName)
		}
		distance = await m.find();
		return true
	}

	static async getAllDistances(req, res, next) {
		try {
		  	return distance
		} catch (e) {
		  	console.log(`api, ${e}`)
		  	res.status(500).json({ error: e })
		}
	}
}
