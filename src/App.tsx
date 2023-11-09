import { useEffect, useState } from "react";
import { Card } from "./components/Card/Card";
import GridContainer from "./components/GridContainer/GridContainer";

async function getData() {
  fetch("https://newsapi.org/s/google-news-br-api");
}

function App() {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://universities.hipolabs.com/search?country=United+States",
          {
            headers: {
              Authorization: "YOUR_NEWSAPI_API_KEY",
              // Replace 'YOUR_NEWSAPI_API_KEY' with your actual NewsAPI key
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setNewsData(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <GridContainer>
      {newsData &&
        newsData
          .slice(0, 6)
          .map((news) => (
            <Card
              heading={news.name}
              paragraph={news.country}
              subtitle={news.domains.join(", ")}
              buttonLabel="More details"
            ></Card>
          ))}
    </GridContainer>
  );
}

export default App;
