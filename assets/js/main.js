"use-strict"

let idPokemon =1;
const buttonNext = document.getElementById("next");
const buttonPrevious = document.getElementById('previous')
const makeBrowser = document.getElementById('main-form')
buttonNext.addEventListener( 'click', e => siguientePokemon(e) )
buttonPrevious.addEventListener( 'click', e => PokemonAnterior(e) )


///////////BROWSER///////////////////////////////
const browser = e => {
    e.preventDefault();
    let PokeNombre = document.getElementById("buscar").value;
    const API = `https://pokeapi.co/api/v2/pokemon/${PokeNombre}`;
    fetch( API)
    .then ( response1 => {
        console.log ( response1 )
        return response1.json() }).then( responseJSON1 => {
            traerInformacion( idPokemon=responseJSON1.id);
            }).catch(err2 => console.log(err2));
  };


function traerInformacion () {
   
    const url =`https://pokeapi.co/api/v2/pokemon/${idPokemon}`
    fetch( url)
    .then ( response => {
        console.log ( response )
        return response.json() }).then( responseJSON => {
            document.querySelector("#poke-img").setAttribute('src', responseJSON.sprites.front_default)
            document.querySelector("h1").textContent= responseJSON.name.toUpperCase()
            document.querySelector("h2").textContent= responseJSON.id
            document.querySelector(".weight").textContent= `Peso:${responseJSON.weight}`
            document.querySelector(".height").textContent= `Altura:${responseJSON.height}`
            document.querySelector('.abilities').textContent=`Experiencia:${responseJSON.base_experience}`
           
            console.log( responseJSON ) })
        .catch(err => console.error(err))//el catch nos permite interceptar errores 
}



  //////////////////BUTTONS////////////////
 function siguientePokemon(evento){
     idPokemon= idPokemon ===898 ? 1: idPokemon+1
     traerInformacion(
         evento.stopPropagation()
     )
    
 }
 function PokemonAnterior(evento ){
    idPokemon= idPokemon ===898 ? 1: idPokemon-1
    traerInformacion(
        evento.stopPropagation()
    )
    //  if(idPokemon=idPokemon<1){
    //      idPokemon=898;
    //      idPokemon-1
    //    traerInformacion(evento)

    //  }else{
    //       idPokemon-1
    //  traerInformacion(
    //      evento.stopPropagation()
    //  )
    //  }
 }

makeBrowser.onsubmit=browser;

window.addEventListener( 'DOMContentLoaded', e=>{
    traerInformacion()
})