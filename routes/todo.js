const { Router } = require('express')
const router = Router()

const Todo = require('../models/todo')

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.findAll()

        res.status(200).json(todos)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Server: GET method error'
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const todo = await Todo.create({
            title: req.body.title,
            done: false
        })

        res.status(201).json({ todo })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Server: POST method error'
        })
    }
})

router.put('/:id', (req, res) => {
    try {


    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Server: PUT method error'
        })
    }
})

router.delete('/:id', (req, res) => {
    try {


    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Server: DELETE method error'
        })
    }
})

module.exports = router
