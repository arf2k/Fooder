import { useEffect, useState } from "react";
import Yelp from "../api/Yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchYelp = async (term) => {
      
    try {
      const response = await Yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "Brooklyn",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError("Someting went wrong");
    }
  };

  useEffect(() => {
    searchYelp("pizza");
  }, []);

  return [searchYelp, results, error];
};
