function Conversor() {
let distanciaEmKm = document.getElementById("valor");

const distancia = Number(distanciaEmKm.value);

let valorEmAnosLuz = 0.00000000000010570;
let conversao = distancia * valorEmAnosLuz;

let distanciaConvertida = document.getElementById('resultado');

let msgExibicao = `A Distancia convertidade de KM/H para LY é de: +${conversao}`;

distanciaConvertida.innerHTML = msgExibicao;

}
