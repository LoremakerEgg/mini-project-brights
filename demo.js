import "./style-global.scss";
import "./style-demo.scss";

const firstEntry = document.getElementById("mon");
const randomPokemonBtn = document.getElementById("pokemonBtn");
const randomPokemonType = document.getElementById("type");
const randomPokemonAbilities = document.getElementById("abilities");
const codeBtn = document.getElementById("show-code");
const codeImg = document.querySelector(".code-container");

async function getPokemon(id) {
  let url = "https://pokeapi.co/api/v2/pokemon/" + id.toString();
  //url of the API + id (which is later randomly generated when pressing button but defaults to 1 on page load, aka Bulbasaur)
  let res = await fetch(url); //same as below, like fetch but baked into async/await function
  let pokemon = await res.json(); //await res.json(), works like doing the normal .then fetch but applied to an async function
  let pokemonName = pokemon["name"]; //selects the pokemons name from the data
  let pokemonType = pokemon["types"][0].type["name"];
  let pokemonAbilityNum = pokemon["abilities"].length; //selects the pokemon type from data (only first type, if multiple NYI)
  let pokemonAbilityArray = pokemon["abilities"];
  let pokemonAbility = [];
  pokemonAbilityArray.forEach((element) => {
    pokemonAbility.push(element["ability"]["name"]);
  });

  firstEntry.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"/><p>${pokemonName}</p>`;
  //shows the images and name of the pokemon, with the first letter being capitalized in CSS
  randomPokemonType.innerText = `THIS POKEMON'S TYPE IS: ${pokemonType.toUpperCase()}!`; //TODO: look into adding 2 types if the pokemon has 2 types
  randomPokemonAbilities.innerText = `THIS POKEMON STARTS WITH ${pokemonAbilityNum} PASSIVES AND THEY ARE: ${pokemonAbility
    .join(", ")
    .toUpperCase()}!`;
} //add more features by researching the API to find otu what more you can include (HP, carried items, etc, etc)

randomPokemonBtn.addEventListener("click", () => {
  let randomPokemon = Math.floor(Math.random() * 152);
  getPokemon(randomPokemon);
}); //get random pokemon when pressing button (TODO: implement way to get color based on pokemon through API (let x, let y, let z, then rgb (xyz) variable to match pokemon)

getPokemon(1); //default on page load to show Bulbasaur

codeBtn.addEventListener("click", () => {
  codeImg.classList.toggle("hidden");
});
