import view from './view'

export default async function showPokemon(){
  let response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
  let pokemon = await response.json()
  result.innerHTML = ''

async function bla(obj){
  for(let key in obj){
  if(typeof(obj[key]) == "number" || typeof(obj[key]) == "string"){
    result.innerHTML += `<span>-----${key}:${obj[key]}</span></br>`
    
  }
  else{
    result.innerHTML += `<span>${key}--->></span></br>`
    bla(obj[key])
  }
  }
}
bla(pokemon)
  // console.log(pokemon)
}
  
showPokemon()