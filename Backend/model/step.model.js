import mongoose from "mongoose";

const Schema = mongoose.Schema;

const stepSchema = new Schema({
    dateTime: {
        type: Date,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
})

const Step = mongoose.model("Step", stepSchema);

export default Step;