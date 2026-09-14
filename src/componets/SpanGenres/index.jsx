import { Container } from "./styles";

// ✅ Removido o 'export' daqui de cima, mantendo apenas o default no final
function SpanGenres({ genres }) {
  return (
    <Container>
      {genres && genres.map((genre) => (
        <span key={genre.id}>{genre.name}</span>
      ))}
    </Container>
  );
}
  
export default SpanGenres;
