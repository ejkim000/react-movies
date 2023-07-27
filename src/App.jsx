import { useState, useEffect } from "react";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

function App() {

  const APIKEY = '38e9dcf9';
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {

      const response = await fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&t=${searchTerm}`);
      const data = await response.json();
      setMovie(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovie("Encanto")
  }, [])

  return (
    <div>
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  )
}

export default App;
