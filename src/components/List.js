import {useState, useEffect} from 'react';
import axios from 'axios';
import Poke from './Poke'
import useAxios from '../hooks/useAxios'
const List = () => {
  const [pokemon, setPokemon] = useAxios(`https://pokeapi.co/api/v2/pokemon/`, 'results')
  // const [pokemon, setPokemon] = useState([]);

  // useEffect(()=>{
  //   axios.get('https://pokeapi.co/api/v2/pokemon/')
  //   .then(res=> setPokemon(res.data.results))
  //   .catch(err=> console.log(err))
  // }, [])

  const mappedPoke = pokemon.map(pokemon=>{
    return <Poke key={pokemon.name} poke={pokemon} />
  })
  return(
    <div>
      <h1>List</h1>
      {mappedPoke}
    </div>
  )
}
export default List