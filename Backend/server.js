import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import StepRouter from "./route/stepRouter.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
})

app.use("/step", StepRouter);

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`)
})