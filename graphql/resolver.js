const Todo = require('../models/todo')

module.exports = {
    async getTodos() {
        try {
            return await Todo.findAll()
        } catch (error) {
            throw new Error('Fetch todos is not available')
        }
    },
    async createTodo({ todo }) {
        try {
            return await Todo.create({
                title: todo.title,
                done: false
            })
        } catch (error) {
            throw new Error('Title is required')
        }
    }
}
