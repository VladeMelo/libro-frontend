import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

import { Container, HeaderContainer, MoviesContainer, Movie, MovieImage, MovieIntroduction, Button, ChangePageContainer } from './styles';

import GlobalStyles from '../../styles/global'
import api from '../../services/api';

interface PopularMoviesDTO {
  results: {
    original_title: string;
    overview: string;
    poster_path: string;
    id: string;
  }[];
}

interface PopularMoviesProps { // to remove 'results' from PopularMoviesDTO
  original_title: string;
  overview: string;
  poster_path: string;
  id: string;
}

const Main = () => {
  const history = useHistory();

  const [movies, setMovies] = useState<PopularMoviesProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    api.get<PopularMoviesDTO>('/movie/popular', {
      params: {
        page: currentPage
      }
    }).then(response => setMovies(response.data.results));
  }, [currentPage]);

  const handleSelectMovie = useCallback((movie) => {
    history.push('/movie', {
      id: movie.id
    })
  }, [history]);

  const handleChangeToPreviousPage = useCallback(() => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  const handleChangeToNextPage = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

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

      <MoviesContainer>
        {movies.map(movie => (
          <Movie>
            <MovieImage>
              <img
                src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                alt="Imagem"
              />
            </MovieImage>

            <MovieIntroduction>
              <h1>{movie.original_title}</h1>
              <h2>{movie.overview}</h2>

              <Button
                onClick={() => handleSelectMovie(movie)}
              >
                <h3>About</h3>
              </Button>
            </MovieIntroduction>
          </Movie>
        ))}
      </MoviesContainer>

      <ChangePageContainer>
        <FiArrowLeftCircle
          size={20}
          onClick={handleChangeToPreviousPage}
        />
        <h1>{currentPage}</h1>
        <FiArrowRightCircle
          size={20}
          onClick={handleChangeToNextPage}
        />
      </ChangePageContainer>
    </Container>
  )
}

export default Main;