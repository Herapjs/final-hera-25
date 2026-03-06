import bcrypt from "bcrypt"
import { editDoctors, editUsers } from "../service/auth.service.js"


export function getMeUsersController(req, res) {
    const { username } = req.users
    res.status(200).json({username})
}

export function getMeDoctorsController(req, res) {
    const {username, specialization } = req.doctors
    res.status(200).json({ username, specialization  })
}




export async function editMeUsersControllers(req, res, next) {
    const { username, password } = req.body
    try {
        const hashPassword = await bcrypt.hash(password, 5)
        await editUsers( username, hashPassword)
        res.status(200).json({ message: "Profile Updated" })
    } catch (error) {
        next(error)
    }
}

export async function editMeDoctorsControllers(req, res, next) {
    const { username, password, specialization } = req.body
    try {
        const hashPassword = await bcrypt.hash(password, 5)
        console.log(hashPassword)
       const tast=  await editDoctors(username, hashPassword, specialization)
       console.log(tast)
        res.status(200).json({ message: "Profile Updated" })
    } catch (error) {
        next(error)
    }
}