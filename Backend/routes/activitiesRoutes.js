import express from "express"
import ActivitiesController from "../controller/activitiesController.js"

const router = express.Router()

router.route("/GetLineChartSteps").get(ActivitiesController.getLineChartSteps)

router.route("/GetAllExercises").get(ActivitiesController.getAllExercises)

router.route("/GetAllDistance").get(ActivitiesController.getDailyDistance)

export default router