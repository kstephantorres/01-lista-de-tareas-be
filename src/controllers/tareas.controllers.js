import Tarea from '../database/model/tarea.js'

export const listaTareas=async(req, res)=>{
    try {
        const tareas = await Tarea.find()
        res.status(200).json(tareas)
    } catch (error) {
        console.log("🚀 ~ listaTareas ~ error:", error)
        res.status(404).json({
            mensaje: "No se encontro la lista de tareas"
        })
    }
}

export const crearTarea = async(req,res)=>{
    try {
        
        console.log(req.body)
        const tareaNueva = new Tarea(req.body)
        await tareaNueva.save() 
        res.status(201).json({
            mensaje : "La tarea fue creada correctamente" 
        })
    } catch (error) {
        console.log("🚀 ~ crearTarea ~ error:", error)
        res.status(400).json({
            mensaje: "No se pudo prosesar la solicitud de crear tarea"
        })  
    }
}

export const obtenerTarea= async (req, res)=>{
    try {
        console.log(req.params.id)
        const tareaBuscado = await Tarea.findById(req.params.id)
        res.status(200).json(tareaBuscado)
    } catch (error) {
        console.log("🚀 ~ obtenerTarea ~ error:", error)
        res.status(404).json({
            mensaje: "No se pudo encontrar la tarea solicitada"
        })  
    }
} 

 

export const editarTarea = async(req, res)=>{
    try { 
        const buscarTarea = await Tarea.findById(req.params.id)
        if(!buscarTarea){
            return res.status(404).json({
                mensaje: "No se pudo editar la tarea, el id es incorrecto."
            })
        } 
        await Tarea.findByIdAndUpdate(req.params.id, req.body)
        //constestar con msj 200
        res.status(200).json({
            mensaje: "La tarea fue modificada exitosamente"
        })
    } catch (error) {
        console.error("🚀 ~ editarTarea ~ error:", error)
        res.status(500).json({
            mensaje: "Ocurrio un error al intentar editar la tarea"
        })
    }
}

// Producto
export const borrarTarea = async(req, res)=>{
    try { 
        const buscarTarea = await Tarea.findById(req.params.id)
        if(!buscarTarea){
            return res.status(404).json({
                mensaje: "No se pudo borrar la tarea, el id es incorrecto."
            })
        } 
        await Tarea.findByIdAndDelete(req.params.id, req.body)
        //constestar con msj 200
        res.status(200).json({
            mensaje: "La tarea fue modificada exitosamente"
        })
    } catch (error) {
        console.error("🚀 ~ borrarTarea ~ error:", error)
        res.status(500).json({
            mensaje: "Ocurrio un error al intentar borrar la tarea"
        })
    }
}
