import express from "express"
import cors from "cors"
import step from "./api/step.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/step", step)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app