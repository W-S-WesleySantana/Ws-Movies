import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getImages } from '../../utils/getImages';
import SpanGenres from '../../componets/SpanGenres'
import Credits from '../../componets/Credits'
import Slider from '../../componets/slider'

import {
  Container,
  Background,
  Cover,
  Info,
  ContainerMovies
} from "./styles";

import { 
  getMovieById, 
  getMovieCredits, 
  getMovieSimilar, 
  getMovieVideos 
} from '../../services/getData';

function Detail({}) {

  const { id } = useParams();

  const [movie, setMovie] = useState([null]);
  const [movieVideos, setMovieVideos] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [movieSimilar, setMovieSimilar] = useState([]);

  useEffect(() => {
    async function getAllData() {

      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id)
      ])
      .then(([movie, videos, credits, similar]) => {
        setMovie(movie);
        setMovieVideos(videos);
        setMovieCredits(credits);
        setMovieSimilar(similar);
      })
      .catch((error) => console.error(error));

    }
     
    getAllData();
  }, [id]);
  

  return (
    <>
   
   
      {movie && movie.backdrop_path && (

        <>
      
        <Background $image={getImages(movie.backdrop_path)} />
      

      <Container>
        <Cover>
          <img src={getImages(movie.poster_path)}/>
        </Cover>
       
       <Info>
       <h2>{movie.title}</h2>

      
       <SpanGenres genres={movie.genres}/>


       <p>{movie.overview}</p>

       <Credits  credits={movieCredits}/>

       </Info>

      </Container>

      <ContainerMovies>
{movieVideos && movieVideos.map(video => (
  <div key={video.id}>

    <h4> {video.name} </h4>
     <iframe
            src={`https://www.youtube.com/embed/${video.key}`}
            title="YouTube video player"
            height="500px"
            width="100%"
          ></iframe>

  </div>
))}

      </ContainerMovies>

      {movieSimilar && <Slider info={movieSimilar} title={"Filmes Similares"} />}

      </>
      )}
    </>
  );
}

export default Detail;
