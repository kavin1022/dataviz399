import app from "./server.js"
import mongodb from "mongodb"
import stepDAO from "./dao/stepDAO.js"
import mongoose from "mongoose"

const port = 8000;

mongoose.connect("mongodb://localhost:27017/dataviz399",)
    .catch(err => {
		console.error(err.stack)
		process.exit(1)
    })
    .then(async client => {
		await stepDAO.injectDB(client)
		
		app.listen(port, () => {
			console.log(`listening on port ${port}`)
		})
})
