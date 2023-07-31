import { useState, useEffect } from "react";
import { ThemeProvider } from 'styled-components';
import Header from "./components/Header";
import MovieDisplay from "./components/MovieDisplay";
import Footer from "./components/Footer";
import GlobalStyles from './components/styles/Global';

const theme = {
  colors: {
    header: '#F03816',
    body: '#eee',
    footer: '#ddd'
  },

  mobile: '768px'
}

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
    getMovie("Train to Busan")
  }, [])

  return (
    <ThemeProvider theme={theme} >
        <GlobalStyles />
        <Header movieSearch={getMovie} />
        <MovieDisplay movie={movie} />
        <Footer />
    </ThemeProvider>
  )
}

export default App;
