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
    }
}
