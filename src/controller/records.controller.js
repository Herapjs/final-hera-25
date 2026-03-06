import createError from 'http-errors'
import { addRecords, deleteRecords, findRecords, getRecords } from '../service/records.service.js'


export async function postRecordsController(req, res, next) {
    try {
        const users = req.users
        if (!users) {
            throw createError(403, "Forbidden: User only")
        }
        const {  type, value, date } = req.body
        const newRecords = await addRecords(type, value)
        res.status(201).json({
            message: "Records created",
            newRecords: {
                id: newRecords.id,
                type: newRecords.type,
                value: newRecords.value
            }
        })
        
    } catch (error) {
        console.log("ผิด")
        next(error)
    }
}

export async function getRecordsController(req, res, next) {
    try {
        const  HealthRecord  = await getRecords()

        res.status(200).json({  HealthRecord  })

    } catch (error) {
        next(error)
    }
}


export async function deleteRecordsController(req, res, next) {
    try {
        const users = req.users
        if (!users) {
            throw createError(403, "Forbidden: User only")
        }
        const id = Number(req.params.id)
        const HealthRecord = await findRecords(id)
        if (!HealthRecord) {
            throw createError(404, "HealthRecord not found")
        }
        await deleteRecords(id)
        res.status(200).json({ message: "HealthRecord deleted" })
    } catch (error) {
        next(error)
    }

}