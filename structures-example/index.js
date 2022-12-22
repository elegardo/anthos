const express = require('express')
const filterMoviesYearGreaterThan = require('./src/filterMoviesYearGreaterThan')
const getAllMoviesOfUser = require('./src/getAllMoviesOfUser')
const User = require('./src/User')

const app = express()
const port = 3000

app.get('/anthos', (request, response) => {

    const name = request.query.name
    const year = parseInt(request.query.year)

    const movies = getAllMoviesOfUser(name)
    const moviesFiltered = filterMoviesYearGreaterThan(movies, year)

    const user = new User(name, moviesFiltered)

    response.send(user)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})