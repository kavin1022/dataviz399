import express from "express"
import Step from "../model/step.model.js"

const router = express.Router();


router.route("/getall").get((req, res) => {
    const allStep = Step.find();

    res.status(200).json({
        success: true,
        data: allStep
    })
})

router.route("/add").post((req, res) => {
    const bDateTime = req.body.dateTime;
    const bValue = req.body.value;
    const newStep = new Step({dateTime: bDateTime, value: bValue})
    newStep.save()
        .then(() => res.json(newStep))
})

export default router;
