import { Card } from "./components/Card/Card";
import FlexContainer from "./components/FlexContainer/FlexContainer";
import { Header } from "./components/Header/Header";
import useUniversityData from "./hooks/useUniversitiesData";

function App() {
  const { universities, isLoading } = useUniversityData();

  if (isLoading)
    return (
      <FlexContainer>
        <Header>Carregando...</Header>
      </FlexContainer>
    );

  return (
    <FlexContainer>
      {universities &&
        universities.map((university) => (
          <Card
            heading={university.name}
            paragraph={university.country}
            subtitle={university.domains.join(", ")}
            buttonLabel="More details"
          ></Card>
        ))}
    </FlexContainer>
  );
}

export default App;
