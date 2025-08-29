let jugadas = ["piedra", "papel", "tijera"];
let jugada = prompt("elegi una jugada piedra, papel o tijera");
let jugadapc = jugadas[Math.floor(Math.random() * 3)];
console.log("La jugada de la PC es " + jugadapc);
if (jugada == jugadapc) {
  console.log("EMPATARON ambos eligieron el mismo");
}
switch (jugada) {
  case "piedra":
    switch (jugadapc) {
      case "papel":
        console.log("PERDSITE ;(");
        break;
      case "tijera":
        console.log("GANASTE!!");
        break;
    }
    break;
  case "papel":
    switch (jugadapc) {
      case "piedra":
        console.log("GANASTE!!");
        break;
      case "tijera":
        console.log("PERDISTE ;(");
        break;
    }
    break;
  case "tijera":
    switch (jugadapc) {
      case "piedra":
        console.log("PERDISTE ;(");
        break;
      case "papel":
        console.log("GANASTE!!");
        break;
    }
    break;
}
