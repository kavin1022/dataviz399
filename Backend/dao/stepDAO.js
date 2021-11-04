import mongoose from "mongoose"
let step, m;

export default class StepDAO {

  	static async injectDB(id) {
		const schemaName = id + "steps";
		let Schema = mongoose.Schema;
		try{
			m = mongoose.model(schemaName);
		}catch(error){
			console.log(error)
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
		step = await m.find();
		return true;
	}

	static async getAllSteps(req, res, next) {
		try {
			let newSteps = step
		  	return(newSteps)
		} catch (e) {
		  	console.log(`api, ${e}`)
		  	res.status(500).json({ error: e })
		}
	}
}
