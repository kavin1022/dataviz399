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
		m.find({}, (err, data) =>{
			distance = data
		});
		return true
	}

	static async getAllDistances(req, res, next) {
		try {
			let newdistances = distance
		  	return(newdistances)
		} catch (e) {
		  	console.log(`api, ${e}`)
		  	res.status(500).json({ error: e })
		}
	}
}
