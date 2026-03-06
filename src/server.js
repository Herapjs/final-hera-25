import express from "express"
import "dotenv/config"
import authRouter from "./routes/auth.routes.js"

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use('/auth', authRouter)
app.use('/users', (req, res)=>{ res.send('auth service')})
app.use('/records', (req, res)=>{ res.send('auth service')})
app.use('/notes', (req, res)=>{ res.send('auth service')})




app.use(err)



app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))