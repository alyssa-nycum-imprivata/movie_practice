const movieFactory = (movie) => {
    return `
    <section class="movie">
        <h3>Title: ${movie.title}</h3>
        <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
    </section>
    `
};

const renderMovies = (movies) => {
    const container = document.querySelector("#movie-container");
    movies.forEach(movie => {
        const movieHtml = movieFactory(movie);
        container.innerHTML += movieHtml;
    });
};