import { useState, useEffect } from "react";
const APIKEY = "8b1042b0";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(
    function () {
      setIsLoading(true);
      setError("");
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${APIKEY}&s=${query}`,
            {
              signal: controller.signal,
            }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError(""); //clean the error after the movie is set
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setError("");
        setMovies([]);
        setIsLoading(false);
        return;
      }
      fetchMovies();
      //   handleCloseMovie();
      return () => controller.abort();
    },
    [query]
  );

  return { movies, error, isLoading };
}
