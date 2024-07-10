import './App.css';
import useFetch from './hooks/useCustomFetch';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';


  const { fetchData: fetchPokemon } = useFetch('https://pokeapi.co/api/v2/pokemon/1')
  const { fetchData: fetchRick } = useFetch('https://rickandmortyapi.com/api/character/1')

  console.log(fetchPokemon)
  console.log(fetchRick)




  return (
    <>

      <h2>Personaje Pokemon</h2>
      {<p>{fetchPokemon.name} </p>}
      <img src={fetchPokemon.sprites.front_default} />

      <h2>Personaje Rick and Morty</h2>
      <p>{fetchRick.name} </p>

      <img src={fetchRick.image} alt="foto" />


    </>
  );
}

export default App;
