import express from "express"
import { authUsersCheck } from "../middlewares/authen.middlewares.js"
import { deleteRecordsController, getRecordsController, postRecordsController } from "../controller/records.controller.js"

const recordsRouter = express.Router()

recordsRouter.post("/health-records", authUsersCheck, postRecordsController)
recordsRouter.get("/health-records", authUsersCheck, getRecordsController)
recordsRouter.get("/health-records/:id", authUsersCheck)
recordsRouter.put("/health-records/:id",authUsersCheck)
recordsRouter.delete("/health-records/:id",authUsersCheck, deleteRecordsController)

export default recordsRouter