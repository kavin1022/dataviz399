import express from "express"
import ActivitiesController from "../controller/activitiesController.js"

const router = express.Router()

router.route("/GetLineChartSteps").get(ActivitiesController.getLineChartSteps)

router.route("/GetDailyDistance").get(ActivitiesController.getDailyDistance)

router.route("/GetAllExerciseDuration/p/").get(ActivitiesController.getAllExerciseDuration)

router.route("/GetDailyCalories").get(ActivitiesController.getDailyCalories)

router.route("/GetRingChartData/p/").get(ActivitiesController.getRingChartData)

router.route("/GetHeartRateByDay/p/").get(ActivitiesController.getHeartRateByDay)

export default router

