import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "margarita";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();

  console.log(drinks, searchTerm);

  return <div>Landing</div>;
};

export default Landing;
