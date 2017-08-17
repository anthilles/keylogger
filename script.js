
//tablica do której będziemy wrzucać wciśnięte klawisze
const pressed = [];
const secredCode = "tajnehaslo"

//nasłuch wciśniętego klawisza
window.addEventListener('keyup', (e)=>{
    // console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secredCode - 1, pressed.length - secredCode.length); //odlicza nam od końca tablicy nasze hasło (przeszukując ją w nasłuchu na "tajnehaslo")

    if(pressed.join('').includes(secredCode)) { //jeśli tablica zawiera tajny kod ('' usuwają przerwy w tablicy) to:
        cornify_add();    
    }

    console.log(pressed);
})