import { prisma } from "../config/prismaClient.js"
import jwt from "jsonwebtoken"

export const findUserByUsername = async (username) => {
    const users = await prisma.users.findFirst({
        where: { username : username }
    })
    return users
}

export const findDoctorByUsername = async (username) => {
    const docters = await prisma.doctors.findFirst({
        where: { username : username }
    })
    return docters
}



export const createUsers = async (username, hashPassword) => {
    const newUsers = await prisma.users.create({
        data: {
            username,
            password: hashPassword
            
        }
    })
    return newUsers
}

export const createDocters = async (username, hashPassword, specialization) => {
    const newDocter = await prisma.doctors.create({
        data: {
            username,
            password: hashPassword,
            specialization
            
        }
    })
    return newDocter
}


export const createToken = async (users) => {
    const payload = {
        id: users.id,
        username: users.username
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: '1d'
    })
    return token
}

export const createDoctorToken = async (docters) => {
    const payload = {
        id: docters.id,
        username: docters.username,
        specialization: docters.specialization
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: '1d'
    })
    return token
}


export const editUsers = async (username, hashPassword) => {
    const result = await prisma.users.updateMany({
        where: { username : username },
        data: {
            username,
            password: hashPassword
        }
    })
    return result
}

export const editDoctors = async (username, hashPassword, specialization) => {
    console.log(username)
    console.log(hashPassword)
    console.log(specialization)

    const result = await prisma.doctors.updateMany({
        where: {username},
        data: {
            username,
            password: hashPassword,
            specialization
        }
    })
    console.log("result", result)

    return result
}


export const findUserById = async (id) => {
    const users = await prisma.users.findFirst({
        where: { id: id }
    })
    return users
}



export const findDoctorById = async (id) => {
    const doctors = await prisma.doctors.findFirst({
        where: { id: id }
    })
    return doctors
}
