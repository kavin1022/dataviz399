import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID
let user

export default class userDAO {
  	static async injectDB(conn) {
		if (user) {
			return
		}
		try {
			user = await conn.db(process.env.ATLAS_NS).collection("users")
		}catch (e) {
			console.error(
				`Unable to establish a collection handle in userDAO: ${e}`,
			)
		}	
	}

}
