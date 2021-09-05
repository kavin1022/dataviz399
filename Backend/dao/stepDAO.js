import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID
let step

export default class StepDAO {
  	static async injectDB(conn) {
		if (step) {
			return
		}
		try {
			step = await conn.db(process.env.ATLAS_NS).collection("steps")
		}catch (e) {
			console.error(
				`Unable to establish a collection handle in stepDAO: ${e}`,
			)
		}	
	}

	static async getAllSteps(req, res, next) {
		try {
			// find in reverse, the last seven days worth of step data
			let newSteps = await step.find({}).sort({_id: -1}).limit(7 * 24 * 60).toArray()
		  	return(newSteps)
		} catch (e) {
		  	console.log(`api, ${e}`)
		  	res.status(500).json({ error: e })
		}
	  }
}
