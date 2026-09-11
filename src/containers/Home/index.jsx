import api from "../../services/Api";
import { useState, useEffect } from "react";
import Button from "../../componets/Button";
import {
  Background,
  Info,
  Poster,
  Container,
  

} from "./styles";


function Home() {

  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMovies() {
      const { data: { results } } = await api.get('/movie/popular');

      setMovie(results[1])



    }


    getMovies()


  }, [])



  return (

    <>

      {movie && (

        <Background img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>

          <Container>
            <Info>

              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>

              <div>
                <Button>Assistir Agora</Button>
                <Button> Assistir Trailer</Button>
              </div>

            </Info>

            <Poster>

              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />

            </Poster>
          </Container>


        </Background>
      )}

    </>
  )
}

export default Home