import createError from 'http-errors'
import jwt from "jsonwebtoken"
import { findDoctorById, findUserById } from '../service/auth.service.js'


export async function authUsersCheck(req, res, next) {
    try {
        const authorization = req.headers.authorization
        if (!authorization) {
            throw createError(401, "Unauthorization")
        }
        const token = authorization.split(" ")[1]
        const payload = jwt.verify(token, process.env.JWT_SECRET, {
            algorithms: ['HS256']
        })
        const users = await findUserById(payload.id)
        if (!users) {
            console.log("ไม่รู้")
            throw createError(401, "Unauthorization")
        }
        req.users = users
        next()
    } catch (error) {
        next(error)
    }
}



export async function authDoctorsCheck(req, res, next) {
    try {
        const authorization = req.headers.authorization
        console.log(authorization)
        if (!authorization) {
            throw createError(401, "Unauthorization")
        }
        const token = authorization.split(" ")[1]
        const payload = jwt.verify(token, process.env.JWT_SECRET, {
            algorithms: ['HS256']
        })
        console.log(payload)
        const doctors = await findDoctorById(payload.id)
        console.log(doctors)
        if (!doctors) {
            throw createError(401, "Unauthorization")
        }
        req.doctors = doctors
        next()
    } catch (error) {
        next(error)
    }
}
