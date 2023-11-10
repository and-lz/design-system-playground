import { Card } from "./components/Card/Card";
import GridContainer from "./components/GridContainer/GridContainer";
import { Header } from "./components/Header/Header";
import useUniversityData from "./hooks/useUniversitiesData";

function App() {
  const { universities, isLoading } = useUniversityData();

  if (isLoading)
    return (
      <GridContainer>
        <Header>Carregando...</Header>
      </GridContainer>
    );

  return (
    <GridContainer>
      {universities &&
        universities.map((university) => (
          <Card
            heading={university.name}
            paragraph={university.country}
            subtitle={university.domains.join(", ")}
            buttonLabel="More details"
          ></Card>
        ))}
    </GridContainer>
  );
}

export default App;
