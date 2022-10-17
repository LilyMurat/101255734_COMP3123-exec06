const express = require("express")
const booksRoutes = require("./routes/books")
const mongoose = require("mongoose")

const app = express()

const SERVER_PORT = 3001

const DB_URL ="mongodb+srv://LaleMulati:Azmat520$&@cluster0.4xu6fb0.mongodb.net/Lab6?retryWrites=true&w=majority"

mongoose.connect(DB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

app.use(express.json())
app.use(express.urlencoded())


app.use("/library/", booksRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>")
    })

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})