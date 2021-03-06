const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type Todo {
        id: ID!
        done: Boolean!
        title: String!
        createdAt: String
        updatedAt: String
    }

    input TodoInput {
        title: String!
    }

    type Query {
        getTodos: [Todo!]!
    }

    type Mutation {
        createTodo(todo: TodoInput!): Todo!
        completeTodo(id: ID!): Todo!
        removeTodo(id: ID!): Boolean!
    }
`)
