const users = [
    {
        name: 'Radeg',
        id: 1,
        email: 'abubjazov@mail.ru'
    },
    {
        name: 'Valeria',
        id: 2,
        email: 'valeria@mail.ru'
    }
]

module.exports = {
    test() {
        return {
            count: Math.trunc(Math.random() * 10),
            users
        }
    },
    random({ min, max, count }) {
        const arr = []

        for (let i = 0; i < count; i++) {
            const random = Math.random() * (max - min) + min
            arr.push(random)
        }

        return arr
    },
    addTestUser({ user: { id, email, name } }) {
        const user = {
            id,
            email,
            name
        }

        users.push(user)

        return user
    }
}
