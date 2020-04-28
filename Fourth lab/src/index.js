import view from './view'
import showPokemon from './showPokemon'

const profileView = document.getElementById('profile-tab')
const pokemonView = document.getElementById('pokemonAPI-tab')

view()

profileView.onclick = view
pokemonView.onclick = showPokemon