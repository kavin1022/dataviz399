import mongoose from "mongoose"
let step;

export default class StepDAO {

  	static async injectDB(id) {
		const schemaName = id + "steps";
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
			step = data
		});
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
