import mongoose from "mongoose"
let calories, m;

export default class caloriesDAO {

	static async injectDB(id) {
		let schemaName = id + "calories";
		let Schema = mongoose.Schema;
		try{
			m = mongoose.model(schemaName);
		}catch(error){
			console.log(error);
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
		calories = await m.find();
		return true;
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
