const mongoose = require("mongoose")
const Schema = mongoose.Schema

const estudiantesSchema = new Schema({
    nombre:{
        type:String,
        require:true,
        max:120
    }
})

module.exports = mongoose.model('estudiantes', estudiantesSchema)