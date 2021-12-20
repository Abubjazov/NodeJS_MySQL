const Todo = require('../models/todo')

module.exports = {
    async getTodos() {
        try {
            return await Todo.findAll()
        } catch (error) {
            throw new Error('Fetch todos is not available')
        }
    }
}
