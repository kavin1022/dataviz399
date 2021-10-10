import Step from "../model/step.js"
import mongoose from "mongoose"
let step;



export default class StepDAO {
  	static async injectDB() {
		if (step) {
			return
		}
		let Schema = mongoose.Schema;
		let m = mongoose.model("p01steps", new Schema({
			dateTime: {
				type: Date,
				required: true
			},
			value: {
				type: Number,
				required: true
			}
		}), "p01steps")
		m.find({}, (err, data) =>{
			step = data
			console.log(data);
		});
	}

	static async getAllSteps(req, res, next) {
		try {
			// find in reverse, the last seven days worth of step data
			let newSteps = step
			//let newSteps = await step.find({}).sort({_id: -1}).limit(7 * 24 * 60).toArray()
		  	return(newSteps)
		} catch (e) {
		  	console.log(`api, ${e}`)
		  	res.status(500).json({ error: e })
		}
	}
}
