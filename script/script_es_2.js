/*
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

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


var longGroup = [];
var shortGroup = [];

// devo dividere le zucchine in base alla dimensione e poi calcolare il peso
// se dimensionincm <= 15 allora vanno nel gruppo corte
// se dimensionincm > 15 vanno nel gruppo lunghe

var checkDimension = 15;
var totalWeightShort = 0;
var totalWeightLong = 0;

for (var i = 0; i < raccoltaZucchine.length; i++) {
    var element = raccoltaZucchine[i];

    if(element.dimensionInCm <= checkDimension) {
        shortGroup.push(element);

        totalWeightShort += element.weight;

    } else {
        longGroup.push(element);

        totalWeightLong += element.weight;

    }
}

console.log(shortGroup);

console.log(longGroup);


console.log('Il peso totale delle zucchine corte è di g: ' + totalWeightShort);

console.log('Il peso totale delle zucchine corte è di g: ' + totalWeightLong);



