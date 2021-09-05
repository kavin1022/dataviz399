import express from "express"
import StepController from "./step.controller.js"

const router = express.Router()

router.route("/getStep").get(StepController.getAllSteps)

export default router