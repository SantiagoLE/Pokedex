import React, {  useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPokemonName } from '../../store/slices/pokemonNameSearch.slice';
import Autosuggest from 'react-autosuggest';
import './styles/inputPokedex.css';
import useFetch from '../../hooks/useFetch';

const optionPokemons = []

const InputPokedex = () => {

    
    // const [optionPokemons, setOptionPokemons] = useState([])
    const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`

const [allPokemons, getAllPokemons] = useFetch(url)

useEffect(() =>  {
    getAllPokemons()
}, [])

if(optionPokemons.length < 1281){
  allPokemons?.results.forEach(pokemon => 
    (optionPokemons.push(pokemon.name)))
  }

  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setPokemonName(value.trim().toLowerCase()));
    setValue('');
  };

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : optionPokemons.filter(option => option.toLowerCase().slice(0, inputLength) === inputValue);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = suggestion => suggestion;

  const renderSuggestion = suggestion => <div>{suggestion}</div>;

  

  return (
    <div className="inputPokedex_form-contain">
      <form className="inputPokedex_form" onSubmit={handleSubmit}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            placeholder: 'Search Pokemon...',
            value,
            onChange: onChange,
            className:"inputPokedex_form-input"
          }}
        />
        <button className="inputPokedex_form-button">Search</button>
      </form>
    </div>
  );
};

export default InputPokedex;
