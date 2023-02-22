import "./style-global.scss";
import "./style-demo.scss";

const firstEntry = document.getElementById("mon");
const randomPokemonBtn = document.getElementById("pokemonBtn");
const randomPokemonType = document.getElementById("type");
const randomPokemonAbilities = document.getElementById("abilities");
const randomPokemonStats = document.getElementById("stats");
const nextPokemonBtn = document.getElementById("nextPokemon");
const prevPokemonBtn = document.getElementById("prevPokemon");
const codeBtn = document.getElementById("show-code");
const codeImg = document.querySelector(".code-overlay");
const navButton = document.getElementById("nav-menu");
const navBar = document.querySelector(".navbar");
let pokemonID = 1;

function pokemonButtonCheck() {
  if (pokemonID === 1) {
    prevPokemonBtn.style.backgroundColor = "grey";
    prevPokemonBtn.disabled = true;
  } else if (pokemonID === 151) {
    nextPokemonBtn.style.backgroundColor = "grey";
    nextPokemonBtn.disabled = true;
  } else {
    prevPokemonBtn.style.backgroundColor = "crimson";
    nextPokemonBtn.style.backgroundColor = "crimson";
    prevPokemonBtn.disabled = false;
    nextPokemonBtn.disabled = false;
  }
}

async function getPokemon(id) {
  let url = "https://pokeapi.co/api/v2/pokemon/" + id.toString();
  //url of the API + id (which is later randomly generated when pressing button but defaults to 1 on page load, aka Bulbasaur)
  let res = await fetch(url); //same as below, like fetch but baked into async/await function
  let pokemon = await res.json(); //await res.json(), works like doing the normal .then fetch but applied to an async function
  let pokemonName = pokemon["name"]; //selects the pokemons name from the data
  let pokemonType = pokemon["types"][0].type["name"];
  let pokemonAbilityNum = pokemon["abilities"].length; //selects the pokemon type from data (only first type, if multiple NYI)
  let pokemonAbilityArray = pokemon["abilities"];
  let pokemonHP = pokemon["stats"][0]["base_stat"];
  let pokemonATK = pokemon["stats"][1]["base_stat"];
  let pokemonAbility = [];
  let pokemonTypeArray = [];

  pokemonAbilityArray.forEach((element) => {
    pokemonAbility.push(element["ability"]["name"]);
  });
  pokemon["types"].forEach((element) => {
    pokemonTypeArray.push(element.type["name"]);
  });

  firstEntry.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="Image of a random Pokemon"/><p>${pokemonName}</p>`;
  //shows the images and name of the pokemon, with the first letter being capitalized in CSS
  if (pokemonTypeArray.length > 1) {
    randomPokemonType.innerText = `THIS POKEMON HAS ${
      pokemonTypeArray.length
    } TYPES AND THEY ARE:${pokemonTypeArray.join(", ").toLocaleUpperCase()}!`; //checks to see how many types the pokemon has and names them all
  } else {
    randomPokemonType.innerText = `THIS POKEMON HAS 1 TYPE AND IT IS: ${pokemonType.toUpperCase()}!`; //if the pokemon only has one type, the single type is shown
  }
  randomPokemonStats.innerText = `THIS POKEMON HAS A BASE HP OF ${pokemonHP} AND A BASE ATTACK OF ${pokemonATK}!`;
  randomPokemonAbilities.innerText = `THIS POKEMON STARTS WITH ${pokemonAbilityNum} PASSIVE ABILITIES AND THEY ARE: ${pokemonAbility
    .join(", ")
    .toUpperCase()}!`;

  pokemonButtonCheck();
}

randomPokemonBtn.addEventListener("click", () => {
  let randomPokemon = Math.floor(Math.random() * 152);
  getPokemon(randomPokemon);
  pokemonID = randomPokemon;
});
//get random pokemon when pressing center button

nextPokemonBtn.addEventListener("click", () => {
  pokemonID++;
  getPokemon(pokemonID);
});
//look at the next pokemon in the ID

prevPokemonBtn.addEventListener("click", () => {
  pokemonID--;
  getPokemon(pokemonID);
});
//look at the previous pokemon in the ID

getPokemon(pokemonID); //default on page load to show Bulbasaur (ID 1)

codeBtn.addEventListener("click", () => {
  codeImg.classList.toggle("hidden");
  codeImg.scrollIntoView({ behavior: "smooth" });
});
navButton.addEventListener("click", () => {
  navBar.classList.toggle("show");
});
