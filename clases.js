class Coche{
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad +=1;
    }

    reducirVelocidad(){
        this.velocidad -=1;
    }
}

var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('AUDI', 100, 2018);
var coche3 = new Coche('MERCEDES', 150, 2011);
var coche4 = new Coche('Renault', 180, 2016);

console.log(coche1);
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
console.log(coche1);
console.log(coche2);
console.log(coche3);
console.log(coche4);