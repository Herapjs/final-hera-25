import { prisma } from "../config/prismaClient.js"

export const getRecords = async () => {

    const  healthRecord  = await prisma.healthRecord.findMany({
        select: {
            id: true,
             type: true,
            value: true
        }
    })
    return  healthRecord 
}

export const addRecords = async (type, value, date) => {
    console.log(type, value, date)
    const  healthRecord  = await prisma.healthRecord.create({
        data: {
            type, value, date
        }
    })
    return  healthRecord 
}

export const findRecords = async (id) => {
    const healthRecord = await prisma.healthRecord.findFirst({
        where: {
            id: id
        }
    })
    return healthRecord
}

export const deleteRecords = async (id) => {
    await prisma.healthRecord.delete({
        where: { id: id }
    })
}