// Example Pokémon Data
const pokemonData = [
    { name: "Pikachu", type: "Electric", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" },
    { name: "Charmander", type: "Fire", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" },
    { name: "Bulbasaur", type: "Grass/Poison", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" },
    { name: "Squirtle", type: "Water", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" },
  ];
  
  // Render Pokémon Cards
  const pokemonCardsContainer = document.getElementById("pokemon-cards");
  
  pokemonData.forEach((pokemon) => {
    const cardHTML = `
      <div class="col s12 m6 l4">
        <div class="card">
          <div class="card-image">
            <img src="${pokemon.img}" alt="${pokemon.name}">
            <span class="card-title black-text">${pokemon.name}</span>
          </div>
          <div class="card-content">
            <p>Type: ${pokemon.type}</p>
          </div>
        </div>
      </div>
    `;
    pokemonCardsContainer.innerHTML += cardHTML;
  });
  
  // Search Pokémon
  function searchPokemon() {
    const searchInput = document.getElementById("pokemon-search").value.toLowerCase();
    const searchResultDiv = document.getElementById("search-result");
    const pokemonInfo = document.getElementById("pokemon-info");
  
    const foundPokemon = pokemonData.find((p) => p.name.toLowerCase() === searchInput);
  
    if (foundPokemon) {
      pokemonInfo.innerHTML = `
        <strong>${foundPokemon.name}</strong><br>
        Type: ${foundPokemon.type}<br>
        <img src="${foundPokemon.img}" alt="${foundPokemon.name}" style="width: 100px;">
      `;
      searchResultDiv.classList.remove("hide");
    } else {
      pokemonInfo.innerHTML = "No Pokémon found with that name.";
      searchResultDiv.classList.remove("hide");
    }
  }