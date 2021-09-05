import express from "express"
import StepController from "./step.controller.js"

const router = express.Router()

router.route("/getSteps").get(StepController.getAllSteps)

router.route("/getLineChartSteps").get(StepController.getLineChartSteps)

export default router