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
			let newSteps = await step.find({}).toArray()
		  	return(newSteps)
		} catch (e) {
		  	console.log(`api, ${e}`)
		  	res.status(500).json({ error: e })
		}
	  }
}
