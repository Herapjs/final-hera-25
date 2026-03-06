import express from "express"
import { loginDoctorsController, loginUsersController, registerDoctersController, registerUsersController } from "../controller/auth.controller.js"


const authRouter = express.Router()

authRouter.post("/register/doctors", registerDoctersController )
authRouter.post("/register/users", registerUsersController )

authRouter.post("/login/doctors",loginDoctorsController )
authRouter.post("/login/users", loginUsersController )



export default authRouter