import express from "express"
import { editMeDoctorsControllers, editMeUsersControllers, getMeDoctorsController, getMeUsersController } from "../controller/users.controller.js"
import { authDoctorsCheck, authUsersCheck } from "../middlewares/authen.middlewares.js"

const usersRouter = express.Router()

usersRouter.get("/users/me", authUsersCheck, getMeUsersController )
usersRouter.put("/users/me", authUsersCheck, editMeUsersControllers )

usersRouter.get("/doctors/me", authDoctorsCheck, getMeDoctorsController)
usersRouter.put("/doctors/me", authDoctorsCheck, editMeDoctorsControllers)

export default usersRouter