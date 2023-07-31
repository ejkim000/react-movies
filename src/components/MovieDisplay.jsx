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
            <Title>{movie.Title}🍿</Title>
            <h2>{movie.Genre}</h2>
            <h3>Realeased: <em>{movie.Released}</em></h3>
            <h3>Country: <em>{movie.Country}</em></h3>
            <h3>Language: <em>{movie.Language}</em></h3>
            <h3>Director: <em>{movie.Director}</em></h3>
            <h3>Actors: <em>{movie.Actors}</em></h3>
            <h3>Rating: <em>{movie.imdbRating}</em></h3>
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