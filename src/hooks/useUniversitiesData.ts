import { useEffect, useState } from "react";

type University = {
  domains: string[];
  alpha_two_code: string;
  state_province: string | null;
  name: string;
  web_pages: string[];
  country: string;
};

type UniversityData = University[];

const useUniversityData = () => {
  const [universities, setUniversities] = useState<UniversityData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://universities.hipolabs.com/search?country=United+States"
        );

        if (response.ok) {
          const data = await response.json();
          setUniversities(data.slice(0, 6));
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { universities, isLoading };
};

export default useUniversityData;
