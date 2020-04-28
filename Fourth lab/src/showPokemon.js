export default async function showPokemon(){
  const url = 'https://pokeapi.co/api/v2/pokemon/ditto/'
  let response = await fetch(url)
  let pokemon =  await response.json()

  result.innerHTML = ''

  async function recurPrint(obj){
    for(let key in obj){
      if(typeof(obj[key]) == "number" || typeof(obj[key]) == "string"){
        result.innerHTML += `<span>-----${key}:${obj[key]}</span></br>`
      }
      else{
        result.innerHTML += `<span>${key}--->></span></br>`
        recurPrint(obj[key])
      }
    }
  }
  recurPrint(pokemon)
}