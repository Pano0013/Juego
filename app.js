class Personas{
    constructor(stats){
    this.vida = stats[0];
    this.ataque = stats[1];
    this.defensa = stats[2];
    }
  
    
}

function generarStats(){
let statsEnemigos = [
    Math.floor(Math.random() * (1000 - 500) + 500),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 50)
]
return statsEnemigos;
}

function crearEnemigos(){
    let enemigos = [];
    while(enemigos.length < 5){
    let enemigo = new Personas(generarStats());
    enemigos.push(enemigo);
   }
    return enemigos;
}

function pedirStats(){
    return stats = [
        parseInt(prompt("ingrese su vida(numero entre 1000 y 2000)")),
        parseInt(prompt("ingrese su ataque(numero entre 100 y 200)")),
        parseInt(prompt("ingrese su defensa(numero entre 50 y 75)"))
    ];
    
}

function validarStats(){
    let statsAliado = pedirStats();
    
    if (statsAliado[0] < 1000 || statsAliado[0] > 2000 || Number.isNaN(statsAliado[0])) {
      alert("No ingresaste un numero valido");
      location.reload();
    } else if (statsAliado[1] < 100 || statsAliado[1] > 200 || Number.isNaN(statsAliado[1])) {
      alert("No ingresaste un numero valido");
      location.reload();
    } else if (statsAliado[2] < 50 || statsAliado[2] > 75 || Number.isNaN(statsAliado[2]) ) {
      alert("No ingresaste un numero valido");
      location.reload();
    }

    return statsAliado;
}

function crearAliado() {
    let aliado = new Personas(validarStats());

    return aliado;
}

function enemigoTarget(array){
 
}

function ataqueAliado(aliado, enemigo) {
  enemigoTarget(enemigo);
  for (let i = 0; i < enemigo.length; i++) {
    console.log("Vida de enemigo " + (i + 1) + ": " + enemigo[i].vida);
  }
  let dañote = aliado.ataque - enemigo[0].defensa;
  if (dañote < 0) {
    dañote = 0;
  }
  console.log("Le hiciste " + dañote + " de daño al enemigo con mas vida!");
  return enemigo[0].vida - dañote;
}

function ataqueEnemigo(aliado, enemigos) {
  let dañote = enemigos[0].ataque - aliado.defensa;
  if (dañote < 0) {
    dañote = 0;
  }
  console.log("Te hicieron " + dañote + " de daño");
  return aliado.vida - dañote;
}

function Rondas(aliado, enemigos) {
  for(let i = 0; i < 10; i++) {
    let enemigosAtacados = ataqueAliado( aliado, enemigos);
    enemigos[0].vida = enemigosAtacados;
    let aliadoAtacado = ataqueEnemigo(aliado, enemigos);
    console.log("Tu vida actual es: " + aliadoAtacado);
    aliado.vida = aliadoAtacado;
    if (aliadoAtacado === 0) {
      console.log("Perdiste");
      return;
    }
    console.log("===============================================");
    if(enemigos[enemigos.length-1].vida === 0) {
      enemigos.pop();
    }
    if(enemigos.length === 0) {
      console.log("Has derrotado a todos los enemigos con una vida restante de: "+aliadoAtacado);
      return;
    }
    }
  console.log("Te quedaste sin rondas");
  }



   

let aliado = crearAliado();
let enemigos =enemigoTarget(crearEnemigos());

enemigoTarget(enemigos);

