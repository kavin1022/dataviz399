import express from "express"
import cors from "cors"
import User from "./model/user.js"
import mongodb from "mongodb"
import mongoose from "mongoose"
import stepDAO from "./dao/stepDAO.js"

//routes import
import step from "./routes/step.js"
import auth from "./routes/auth.js"


const port = 8000;

const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/dataviz399", {useNewUrlParser: true, useUnifiedTopology: true})
    console.log("database connected")
}
connectDB();

const app = express()
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/getallusers", (req, res) => {
    User.find()
        .then((result) => {
            res.send(result)
        })
    .catch(err => {
        console.log(err)
    })
})
app.use("/api/step", step)
app.use("/api/auth", auth)
app.use("*", (req, res) => res.status(404).json({ error: "api not found"}))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

