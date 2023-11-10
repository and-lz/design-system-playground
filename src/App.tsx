import Button from "./components/Button/Button";
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
            paragraph={"Description about the university goes here"}
            subtitle={`${university.alpha_two_code} ${university.country}`}
          >
            <Button
              onClick={() => window.open(`http://${university.domains[0]}`)}
            >
              More detials
            </Button>
          </Card>
        ))}
    </FlexContainer>
  );
}

export default App;
