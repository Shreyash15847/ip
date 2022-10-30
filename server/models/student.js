import mongoose, { mongo } from "mongoose";

const studentSchema = mongoose.Schema({
    registratioNumber:Number,
    name:String,
    grade:String,
    section: {
        type:String,
        default: 'A'
    },
    subjects:[String]

});

const student =  mongoose.model('student',studentSchema);

export default student;