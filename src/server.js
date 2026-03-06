import express from "express"
import "dotenv/config"
import authRouter from "./routes/auth.routes.js"
import errHandler from "./middlewares/errHandler.js"
import usersRouter from "./routes/users.routes.js"
import recordsRouter from "./routes/records.routes.js"
// import notesRouter from "./routes/notes.routes.js"

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use('/auth', authRouter)
app.use('/users', usersRouter)
app.use('/records', recordsRouter)
// app.use('/notes', notesRouter)




app.use(errHandler)


app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))