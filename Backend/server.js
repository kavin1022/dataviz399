import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

//routes import
import activities from "./routes/activitiesRoutes.js"
import auth from "./routes/authRoutes.js"
import sleep from "./routes/sleepRoutes.js"
//local link: mongodb://localhost:27017/dataviz399

import path from "path";

const port = 8000;

console.log()
const connectDB = async () => {
    await mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true})
    
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

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../Frontend/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../Frontend/build/index.html"));
    })
}

app.use("*", (req, res) => res.status(404).json({ error: "api not found"}))
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

