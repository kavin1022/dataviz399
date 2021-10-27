import express from "express"
import cors from "cors"
import mongoose from "mongoose"

//routes import
import activities from "./routes/activitiesRoutes.js"
import auth from "./routes/authRoutes.js"
import sleep from "./routes/sleepRoutes.js"

const port = 8000;

const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/dataviz399", {useNewUrlParser: true, useUnifiedTopology: true})
    
    console.log("database connected")
}
connectDB();

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/api/activities", activities)
app.use("/api/auth", auth)
app.use("/api/sleep", sleep)

app.use("*", (req, res) => res.status(404).json({ error: "api not found"}))
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

