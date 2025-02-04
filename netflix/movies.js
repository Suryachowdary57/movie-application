async function fetchAllMovies() {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
              'X-RapidAPI-Key': '35cd193881mshab5e0aa6cadaaf5p1493f2jsna57e99dfcf7b',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options); // Fetching all movies
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const movies = await response.json(); // Parse JSON response
        displayAllMovies(movies); // Display all movies
        console.log(movies)
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
}

function displayAllMovies(movies) {
    const movieContainer = document.getElementById('movie');
    movieContainer.innerHTML = movies
        .map(movie => `
            <div class="movie-card">
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p><strong>Year:</strong> ${movie.year}</p>
                <p><strong>Rating:</strong> ${movie.rating}</p>
            </div>
        `)
        .join(''); // Render all movie cards
}

// Call the function to fetch and display all 100 movies
fetchAllMovies();