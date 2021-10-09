import express from "express"
import StepController from "./step.controller.js"

const router = express.Router()

router.route("/getSteps").get(StepController.getAllSteps)

router.route("/getLineChartSteps").get(StepController.getLineChartSteps)

router.route("/reg").get(StepController.reg)

export default router

const i = {
    user: {
        "username": "p01",
        "password": "p01"
    }
}