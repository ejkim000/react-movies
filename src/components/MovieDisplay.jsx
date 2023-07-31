import { Container, Title, Img } from './styles/MovieDisplay.styled';
import { Flex } from './styles/Flex.styled';


function MovieDisplay({ movie }) {
  const loaded = () => {

    if (movie.Error) return(<Title>{movie.Error}</Title>);  

    return (
      <Container>
        <Flex>
          <Img src={movie.Poster} alt={movie.Title} />

          <Flex direction='column'>
            <Title>{movie.Title}</Title>
            <h2>Genre: {movie.Genre}</h2>
            <h3>Realeased: {movie.Released}</h3>
            <h3>Country: {movie.Country}</h3>
            <h3>Director: {movie.Director}</h3>
            <h3>Actors: {movie.Actors}</h3>
            <h3>Rating: {movie.imdbRating}</h3>
            <p>{movie.Plot}</p>
          </Flex>

        </Flex>
      </Container>
    )
  }

  const loading = () => {
    return <Title>No Movie to Display!</Title>;
  }

  return movie ? loaded() : loading();
}

export default MovieDisplay;