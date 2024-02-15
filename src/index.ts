import express, { Request, Response } from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.get("/", (req: Request, res: Response)=> res.send("test"))

app.listen(3001, ()=> {
    console.log(`Running on port 3001`)
})