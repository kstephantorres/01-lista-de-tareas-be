import { Router } from "express"
import { borrarTarea, crearTarea, editarTarea, listaTareas, obtenerTarea } from "../controllers/tareas.controllers.js"

const router = Router()
router.route('/tareas').get(listaTareas).post(crearTarea)
router.route('/tarea/:id').get(obtenerTarea).put(editarTarea).delete(borrarTarea)
export default router