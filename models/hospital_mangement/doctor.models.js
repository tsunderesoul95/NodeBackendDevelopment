import mongoose from 'mongoose'
const numberOfHrsWorked = new mongoose.Schema({
    hrsWorked: {
        type: Number,
        required: true
    },
    hospitalWorked : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
})
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary : {
        type: String,
        required: true
    },
    qualification : {
        type: String,
        required: true
    },
    experienceInYears : {
        type: Number,
        default: 0
    },
    worksInHospitals : [numberOfHrsWorked]
},{timestamps:true})
export const Doctor = mongoose.model("Doctor",doctorSchema)