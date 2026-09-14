import { useEffect, useState } from "react";
import { getMovie } from "../../services/getData";
import { Container, Background } from "./styles";



function Modal({ movieId,setShowModal }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovie() {
      setMovie (await getMovie(movieId))
    }
    

    getMovie();
  }, []);

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title="YouTube video player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
