import { useState, useEffect } from "react";

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      callback?.();
      const controller = new AbortController();
      if (!query) {
        setMovies([]);
        setError("");
        return;
      }
      async function fetchMovies() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://www.omdbapi.com/?s=${query}&apikey=98245f11`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error(
              "Oops! Unable to fetch movies at the moment. Please try again later."
            );

          const data = await res.json();

          if (data.Response === "False")
            throw new Error("No movies found. Please try a different title.");

          setMovies(data.Search || []);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
