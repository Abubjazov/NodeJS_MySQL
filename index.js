require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const { graphqlHTTP } = require('express-graphql')
const sequelize = require('./utils/dabase')

const schema = require('./graphql/schema')
const resolver = require('./graphql/resolver')

const PORT = process.env.PORT

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.use(graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true
}))

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
