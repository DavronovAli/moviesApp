import {useParams, Link} from 'react-router-dom';
import useFetch from './useFetch';

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return (
      <div className='loading'></div>
    )
  };

  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    )
  };

  const { Poster, Title, Plot, Year, Released, Runtime, Genre, Actors, Country, imdbRating, BoxOffice} = movie;
  return (
    <section className='single-movie'>
      <img src={Poster} alt={Title} />
      <div className='single-movie-info'>
        <h2>{Title}</h2>
        <p className='plot'>{Plot}</p>
        <p><b>Year</b>: {Year}</p>
        <p><b>Released</b>: {Released}</p>
        <p><b>Runtime</b>: {Runtime}</p>
        <p><b>Genre</b>: {Genre}</p>
        <p><b>Actors</b>: {Actors}</p>
        <p><b>Country</b>: {Country}</p>
        <p><b>imdbRating</b>: {imdbRating}</p>
        <p><b>BoxOffice</b>: {BoxOffice}</p>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie;