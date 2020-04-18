import showPokemon from "./showPokemon"

export default function(){
	const profileView = document.getElementById('profile-tab')
	const pokemonView = document.getElementById('pokemonAPI-tab')
	const profileTemplate = '<h3>Лабораторная работа №4</h3> </br><h4>Выполнил:студент группы М3307,Носовец Даниил</h4>'
	
	result.innerHTML = profileTemplate
	pokemonView.onclick = showPokemon
	profileView.onclick = function(){
		result.innerHTML = profileTemplate
	}
}