import { useState, useEffect } from "react";
import { Container } from "./styles";
import Slider from "../../componets/slider";

// 💡 Importando as funções específicas de séries do seu arquivo de serviços
import { getTopSeries, getPopularSeries } from "../../services/getData";

function Series() {
  // Inicializamos os estados como null para controlar o carregamento
  const [popularSeries, setPopularSeries] = useState(null);
  const [topSeries, setTopSeries] = useState(null);

  useEffect(() => {
    async function loadSeriesData() {
      // Executa as requisições em paralelo puxando os dados do TMDB
      Promise.all([
        getPopularSeries(),
        getTopSeries()
      ])
      .then(([popularData, topData]) => {
        
        // 💡 TRATAMENTO DE SEGURANÇA PARA SÉRIES POPULARES:
        if (popularData && popularData.results && Array.isArray(popularData.results)) {
          setPopularSeries(popularData.results);
        } else if (Array.isArray(popularData)) {
          setPopularSeries(popularData);
        } else {
          setPopularSeries([]); // Fallback de segurança
        }

        // 💡 TRATAMENTO DE SEGURANÇA PARA TOP SÉRIES:
        if (topData && topData.results && Array.isArray(topData.results)) {
          setTopSeries(topData.results);
        } else if (Array.isArray(topData)) {
          setTopSeries(topData);
        } else {
          setTopSeries([]); // Fallback de segurança
        }
      })
      .catch((error) => {
        console.error("Erro ao carregar os dados de séries da API:", error);
      });
    }

    loadSeriesData();
  }, []);

  return (
    <Container>
      <h1 style={{ color: "#fff", padding: "20px 0 0 45px" }}>Séries de TV</h1>

      {/* 💡 VALIDAÇÃO ANTES DA RENDERIZAÇÃO:
          O Slider só é chamado se a lista for confirmada como um Array populado */}
      {popularSeries && Array.isArray(popularSeries) && popularSeries.length > 0 && (
        <Slider info={popularSeries} title={"Séries Populares"} />
      )}
      
      {topSeries && Array.isArray(topSeries) && topSeries.length > 0 && (
        <Slider info={topSeries} title={"Top Séries"} />
      )}

      {/* Exibe uma mensagem amigável caso a API ainda esteja carregando */}
      {!popularSeries && !topSeries && (
        <p style={{ color: "#aaa", padding: "40px", textAlign: "center" }}>
          Carregando catálogo de séries...
        </p>
      )}
    </Container>
  );
}

export default Series;
