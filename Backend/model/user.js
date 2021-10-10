import mongoose from "mongoose"

const stepSchema = mongoose.Schema({
    dateTime: {
        type: Date,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
})

const userSchema = mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    stepsData: [stepSchema]
})

const User = mongoose.model("User", userSchema);

export default User