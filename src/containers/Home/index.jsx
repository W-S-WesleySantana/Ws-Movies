import { useState, useEffect } from "react";
import Button from "../../componets/Button";
import { getImages } from "../../utils/getImages";
import Modal from "../../componets/Modal";
import { useNavigate } from "react-router-dom";
import {
  Background,
  Info,
  Poster,
  Container,
  ContainerButtons,
} from "./styles";
import Slider from "../../componets/slider";


import { 
  getMovies, 
  getTopMovies, 
  getTopSeries, 
  getPopularSeries, 
  getTopPeople 
} from "../../services/getData";


function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovie, setTopMovie] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
    
      try {
        const [movies, topMovies, topSeriesData, popularSeriesData, people] = await Promise.all([
          getMovies(),
          getTopMovies(),
          getTopSeries(),
          getPopularSeries(),
          getTopPeople()
        ]);

      
        setMovie(movies[0]);
        setTopMovie(topMovies);
        setTopSeries(topSeriesData);
        setPopularSeries(popularSeriesData);
        setTopPeople(people);
      } catch (error) {
        console.error("Erro ao carregar os dados da API:", error);
      }
    }

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && 
          <Modal movieId={movie.id} setShowModal={setShowModal} />}

          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>

              <ContainerButtons>
                <Button onClick={() => navigate(`/detalhe/${movie.id}`)} red={true}>Assistir Agora</Button>
                <Button onClick={() => setShowModal(true)} red={false}>Assistir Trailer</Button>
              </ContainerButtons>
            </Info>

            <Poster>
              <img src={getImages(movie.poster_path)} alt={movie.title} />
            </Poster>
          </Container>
        </Background>
      )}

      {topMovie && <Slider info={topMovie} title={"Top Filmes"}/>}
      {topSeries && <Slider info={topSeries} title={"Top Series"}/>}
      {popularSeries && <Slider info={popularSeries} title={"Séries Populares"}/>}
      {topPeople && <Slider info={topPeople} title={"Artistas Populares"}/>}
    </>
  );
}

export default Home;
