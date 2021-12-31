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
 
    let enemigoTarget = array.sort((a, b) => b.vida - a.vida);
   
    return enemigoTarget;
}


let aliado = crearAliado();
let enemigos =enemigoTarget(crearEnemigos());
let id = 0;
console.log(enemigos); 
for(let i = 0; i<=10; i++){
  if(id > 4){
    id = 0
  }
  enemigos[id].vida -= aliado.ataque + enemigos[id].defensa;
   console.log(enemigos); 
        
  id++;  
    }
   


