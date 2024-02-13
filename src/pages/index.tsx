/**
 * Welcome!
 *
 * In this exercise, we'll be building a Pokedex.
 *
 * For this first step, we'll want to build a grid of Pokemon. We'll be using the
 * Pokedex API (https://pokeapi.co/) to fetch data.
 *
 * 1. Use https://pokeapi.co/api/v2/pokemon?limit=20 to fetch a list of Pokemon. Display the names
 * in a grid
 *
 * 2. Add images of each Pokemon to the grid. We can use images from assets.pokemon.com for this.
 * The filename corresponds to the index of the Pokemon in the PokeAPI response. For example,
 * Bulbasaur's image is https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png
 *
 * 3. Let's add pagination to our our grid. The PokeAPI accepts an `offset` parameter to skip
 * a number of results. Add a "Next" button to the bottom of the grid that fetches the next 20 results
 * on every click. For example, the second page of results can be fetched using
 * https://pokeapi.co/api/v2/pokemon?limit=20&offset=20. Let's add a "Previous" button and
 * set that up similar to our "Next" button.
 *
 * 4. It seems like it might be useful to share a specific page of results.
 * Can we have so loading /?page=2 will load the second page of results? If there's no
 * page parameter, we should default to the first page. Switching pages should update the URL.
 *
 * 5. Perfect! Now let's load our results from the server to improve the experience. Use getServerSideProps
 * to load the initial set of results. Interacting with the "Next" and "Previous" buttons should still fetch
 * the results client-side.
 */
import Layout from "@/components/layout";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Roamly Pokedex</title>
      </Head>

      <Layout />
    </>
  );
}
