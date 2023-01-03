import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type fetchPokemon = Parameters<typeof useQuery<pokemonAPISuccess>>[1];
type pokemonAPISuccess = {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
  }[];
};

const fetchPokemon: fetchPokemon = async () => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
  );
  console.log(data)
  return data
};

export function usePokemon() {
  return useQuery<pokemonAPISuccess>({
    queryKey: ["pokemon", "list", "all"],
    queryFn: fetchPokemon,
  });
}
