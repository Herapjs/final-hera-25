import createError from 'http-errors'
import bcrypt from "bcrypt"
import { createDocters, createDoctorToken, createToken, createUsers, findDoctorByUsername, findUserByUsername } from '../service/auth.service.js'

export async function registerUsersController(req, res, next) {
    const { username, password } = req.body
    try {
        const users = await findUserByUsername(username)
        if (users) {
            throw createError(400, "Username already exist")
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const newUser = await createUsers(username, hashPassword)
        res.status(201).json({
            message: "Register Success",
            user: {
                id: newUser.id,
                username: newUser.users
            
            }
        })
    } catch (error) {
        next(error)
    }
}

export async function registerDoctersController(req, res, next) {
    const { username, password, specialization } = req.body
    try {
        const doctors = await findDoctorByUsername(username)
        if (doctors) {
            throw createError(400, "Username already exist")
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const newDocter = await createDocters(username, hashPassword, specialization)
        res.status(201).json({
            message: "Register Success",
            user: {
                id: newDocter.id,
                username: newDocter.doctors,
                specialization: newDocter.specialization
            
            }
        })
    } catch (error) {
        next(error)
    }
}


export async function loginUsersController(req, res, next) {
    const { username, password } = req.body
    try {
        const users = await findUserByUsername(username)
        const isMatch = await bcrypt.compare(password, users.password)
        if (!users || !isMatch) {
            throw createError(401, "Invalid credentials")
        }
        const token = await createToken(users)
        res.status(201).json({
            message: "Login Success",
            token: token,
            user: {
                id: users.id,
                username: users.users
               
            }
        })
    } catch (error) {
        next(error)
    }
}


export async function loginDoctorsController(req, res, next) {
    const { username, password, specialization } = req.body
    try {
        const docters = await findDoctorByUsername(username)
        const isMatch = await bcrypt.compare(password, docters.password)
        if (!docters || !isMatch) {
            throw createError(401, "Invalid credentials")
        }
        const token = await createDoctorToken(docters)
        res.status(201).json({
            message: "Login Success",
            token: token,
            docters: {
                id: docters.id,
                username: docters.docters,
                specialization: docters.specialization
               
            }
        })
    } catch (error) {
        next(error)
    }
}