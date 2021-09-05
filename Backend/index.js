import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import stepDAO from "./dao/stepDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(
    process.env.ATLAS_URI,
    {
      useNewUrlParser: true }
    )
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