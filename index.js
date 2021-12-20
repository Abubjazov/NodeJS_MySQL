require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const sequelize = require('./utils/dabase')

const PORT = process.env.PORT

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.use((req, res, next) => {
    res.sendFile('/index.html')
})

async function start() {
    try {
        await sequelize.sync() //{ force: true }

        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
