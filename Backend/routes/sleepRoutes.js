import express from "express"
import sleepController from "../controller/sleepController.js"

const router = express.Router()

router.route("/GetAllSleep").get(sleepController.getAllSleep)

router.route("/GetSleepDuration").get(sleepController.getSleepDuration)

router.route("/GetSleepStages").get(sleepController.getSleepStages)

export default router