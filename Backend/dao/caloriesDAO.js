import mongoose from "mongoose"
let calories;

export default class caloriesDAO {

  	static async injectDB(id) {
		const schemaName = id + "calories";
		let Schema = mongoose.Schema;
		let m = mongoose.model(schemaName, new Schema({
			dateTime: {
				type: Date,
				required: true
			},
			value: {
				type: Number,
				required: true
			}
		}), schemaName)
		m.find({}, (err, data) =>{
			calories = data
		});
	}

	static async getAllCalories(req, res, next) {
		try {
		  	return calories
		} catch (e) {
		  	console.log(`api, ${e}`)
		  	res.status(500).json({ error: e })
		}
	}
}
