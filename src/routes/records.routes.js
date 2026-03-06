import express from "express"

const recordsRouter = express.Router()

recordsRouter.post("/health-records",)
recordsRouter.get("/health-records",)
recordsRouter.get("/health-records/:id",)
recordsRouter.put("/health-records/:id",)
recordsRouter.delete("/health-records/:id",)

export default recordsRouter