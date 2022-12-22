const Movie = require("./Movie")

function getAllMoviesOfUser(name) {
    const movies = []

    if (name === 'Lucas') {
        movies.push(new Movie("Sueños de Libertad", 1994, 9.2))
        movies.push(new Movie("El padrino", 1972, 9.2))
        movies.push(new Movie("The Dark Knight", 2008, 9.0))
        movies.push(new Movie("El padrino II", 1974, 9.0))
        movies.push(new Movie("12 Angry Men", 1957, 9.0))
        movies.push(new Movie("La lista de Schindler", 1993, 8.9))
        movies.push(new Movie("The Lord of the Rings: The Return of the King", 2003, 8.9))
        movies.push(new Movie("Pulp Fiction: Tiempos violentos", 1994, 8.8))
        movies.push(new Movie("El señor de los anillos: La comunidad del anillo", 2001, 8.8))
        movies.push(new Movie("El bueno, el malo y el feo", 1966, 8.8))
    }
    else {
        movies.push(new Movie("Forrest Gump", 1994, 8.8))
        movies.push(new Movie("Fight Club", 1999, 8.7))
        movies.push(new Movie("The Lord of the Rings: The Two Towers", 2002, 8.7))
        movies.push(new Movie("El origen", 2010, 8.7))
        movies.push(new Movie("El imperio contraataca", 1980, 8.7))
        movies.push(new Movie("The Matrix", 1999, 8.7))
        movies.push(new Movie("Buenos muchachos", 1990, 8.7))
        movies.push(new Movie("Atrapado sin salida", 1975, 8.6))
        movies.push(new Movie("Se7en", 1995, 8.6))
        movies.push(new Movie("Los siete Samurais", 1954, 8.6))
    }

    return movies
}

module.exports = getAllMoviesOfUser