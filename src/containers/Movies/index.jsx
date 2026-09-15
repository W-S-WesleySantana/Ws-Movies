import { useState, useEffect } from "react";
import { Container } from "./styles";
import Slider from "../../componets/slider";

// Importando as funções necessárias do seu arquivo de serviços
import { getMovies, getTopMovies } from "../../services/getData";

function Movies() {
  // Estados para as categorias solicitadas
  const [popularMovies, setPopularMovies] = useState(null);
  const [allMovies, setAllMovies] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);

  useEffect(() => {
    // 1. Busca os filmes normais para listar em "Todos os Filmes"
    async function loadAllMovies() {
      try {
        const response = await getMovies();
        const moviesList = response?.results || response || [];
        
        if (Array.isArray(moviesList) && moviesList.length > 0) {
          setAllMovies(moviesList);
          
          // Cria uma lista de "Favoritos" fixa (ex: invertendo a ordem original)
          setFavoriteMovies([...moviesList].reverse());
          
          // Cria uma lista de "Similares" fixa (ex: embaralhando os itens)
          const shuffled = [...moviesList].sort(() => 0.5 - Math.random());
          setSimilarMovies(shuffled);
        }
      } catch (error) {
        console.error("Erro ao carregar todos os filmes:", error);
      }
    }

    // 2. Busca os top filmes para listar em "Filmes Populares"
    async function loadPopularMovies() {
      try {
        const response = await getTopMovies();
        const topList = response?.results || response || [];
        
        if (Array.isArray(topList) && topList.length > 0) {
          setPopularMovies(topList);
        }
      } catch (error) {
        console.error("Erro ao carregar filmes populares:", error);
      }
    }

    // Executa as buscas de forma isolada, sem depender uma da outra
    loadAllMovies();
    loadPopularMovies();
  }, []);

  return (
    <Container>
      <h1 style={{ color: "#fff", padding: "20px 0 0 45px" }}>Catálogo de Filmes</h1>

      {/* Renderização direta de cada Slider com verificação de Array isolada */}
      {popularMovies && Array.isArray(popularMovies) && (
        <Slider info={popularMovies} title={"Filmes Populares"} />
      )}

      {allMovies && Array.isArray(allMovies) && (
        <Slider info={allMovies} title={"Todos os Filmes"} />
      )}
      
      {favoriteMovies && Array.isArray(favoriteMovies) && (
        <Slider info={favoriteMovies} title={"Filmes Favoritos"} />
      )}

      {similarMovies && Array.isArray(similarMovies) && (
        <Slider info={similarMovies} title={"Filmes Similares"} />
      )}
    </Container>
  );
}

export default Movies;
