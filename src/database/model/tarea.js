import mongoose, { Schema } from 'mongoose'

const tareaSchema = new Schema({
    tarea:{
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 80
    }
})

// conjunto de schemas = modelo
const Tarea = mongoose.model('tarea',tareaSchema) //siempre en singular 'producto'

export default Tarea