const express = require("express");
const {RecomendedMovies, TopRatedMovies, PopularMovies, UpcomingMoviesies} = require("../backend/db");

const api = "8e7b8a474b8d47c6d75c0a70c794ca15";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTdiOGE0NzRiOGQ0N2M2ZDc1YzBhNzBjNzk0Y2ExNSIsInN1YiI6IjY1YWJhYTBhNzJkODU1MDBiZTQ0MWRmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XRe24GMRv80ysTAe7bGczyfkQVMutCV4JGY3zbw46Jg"

const app = express();

app.use(express.json());

const getRequests = ["now_playing", "popular", "top_rated", "upcoming"];

getRequests.forEach(val => {
    app.get(`/${val}`, async (req, res) => {
        const url = `https://api.themoviedb.org/3/movie/${val}?language=en-US&page=1`;
        try {
            const movies = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await movies.json();
            res.json(data.results);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

app.listen(3000, () => console.log("listning at port 3000"))