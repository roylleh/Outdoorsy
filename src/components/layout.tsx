import { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

const API = "https://pokeapi.co/api/v2/pokemon?limit=20";
const ASSETS = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

const Layout = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  async function fetchPokemon() {
    const offset = page * 20 - 20;
    const res = await fetch(API + "&offset=" + offset);
    const json = await res.json();
    const results = json.results;
    setPokemon(results);
  }

  function genImgSrc(entry: Pokemon) {
    const url = entry.url;
    const split = url.split("/");
    const id = split[split.length - 2].padStart(3, "0");
    return ASSETS + id + ".png";
  }

  function setOffset(offset: number) {
    setPage((prevPage) => Math.max(prevPage + offset, 1));
  }

  return (
    <div>
      <div className="bg-purple-900 p-4 text-white">Pokedex</div>
      <div className="p-4">
        <div className="pokemon-grid">
          {pokemon?.map((entry) => (
            <div className="pokemon-entry" key={entry.name}>
              <div>{entry.name}</div>
              <img src={genImgSrc(entry)} alt={entry.name} />
            </div>
          ))}
          <button className="previous" onClick={() => setOffset(-1)}>
            Previous
          </button>
          <button className="next" onClick={() => setOffset(1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
