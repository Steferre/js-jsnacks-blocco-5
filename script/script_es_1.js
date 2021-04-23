/*
Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
peso e lunghezza. Calcola quanto pesano tutte le zucchine.
*/

// creo un array di oggetti contenente i 10 oggetti/zucchine

var raccoltaZucchine = 
[{
    tipology: "zucchino nero di Milano",
    weight: 250,
    dimensionInCm: 15
},
{
    tipology: "zucchino romanesco",
    weight: 125,
    dimensionInCm: 13
},
{
    tipology: "zucchino ortolano di Faenza",
    weight: 50,
    dimensionInCm: 14
},
{
    tipology: "lunga fiorentina",
    weight: 200,
    dimensionInCm: 9
},
{
    tipology: "zucchino siciliano",
    weight: 175,
    dimensionInCm: 43
},
{
    tipology: "striata di Napoli",
    weight: 100,
    dimensionInCm: 20
},
{
    tipology: "bianca",
    weight: 74,
    dimensionInCm: 11
},
{
    tipology: "rigata",
    weight: 91,
    dimensionInCm: 7
},
{
    tipology: "tonda",
    weight: 164,
    dimensionInCm: 18
},
{
    tipology: "trombetta",
    weight: 238,
    dimensionInCm: 26 
}]
// definiamo una variabile per racchiudere il dato totale che ci serve
var pesoTotaleRaccolto = 0;

for (var i = 0; i < raccoltaZucchine.length; i++) {
    //salvo in una variabile più semplice ogni oggetto/indice dell'array
    var element = raccoltaZucchine[i];
    // così ad ogni ciclo i indica un oggetto del mio array
    // e possimao quindi ricavarci il valore della chiave che ci serve
    
    pesoTotaleRaccolto += element.weight; 

    console.log(element.weight);
}

console.log("Il peso totale delle zucchine raccolte è di g: " + pesoTotaleRaccolto);


