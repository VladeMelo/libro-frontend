import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Container, HeaderContainer, MovieContainer, MovieImg } from './styles';

import GlobalStyles from '../../styles/global'
import api from '../../services/api';

interface MovieDTO {
  vote_average: number;
  original_title: string;
  release_date: string;
  genres: {
    name: string;
  }[];
  backdrop_path: string;
}

const Movie = () => {
  const location = useLocation<{
    id: string;
  }>();

  const [movie, setMovie] = useState<MovieDTO>({} as MovieDTO);

  useEffect(() => {
    AOS.init({
      duration: 1600,
      delay: 800 // to let the image try to render
    });
  }, [])

  useEffect(() => {
    api.get<MovieDTO>(`/movie/${location.state.id}`).then(response => setMovie(response.data));
  }, [location.state.id]);

  const releaseYear = useMemo(() => {
    if (movie.release_date !== undefined) {
      const [year, , ] = movie.release_date.split('-'); // year is the first
      
      return year;
    }
  }, [movie.release_date]);

  return(
    <Container>
      <GlobalStyles />
      
      <HeaderContainer>
        <div>
          <img
            src='http://libro.studio/wp-content/uploads/2020/09/logo_assinatura.png'
            alt='Logo'
          />

          <h1>Librofy</h1>
        </div>
      </HeaderContainer>

      <MovieContainer>
        <MovieImg
          data-aos="zoom-in"
        >
          <img
            src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
            alt='Movie'
          />

          <h1>{movie.original_title}</h1>
          <h2>Released: {releaseYear}</h2>
          <h3>Rating: {movie.vote_average}</h3>

          <div>
            {movie.genres && movie.genres.map(genre => (
              <h4>{genre.name}</h4>
            ))}
          </div>
        </MovieImg>
      </MovieContainer>
    </Container>
  )
}

export default Movie;