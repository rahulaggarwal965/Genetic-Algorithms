// var population;
// var matingPool;
// var target;
// var mutationRate;
// var letters;
//
// function setup() {
//   target = "the world is holding on at a reasonable pace";
//   muationRate = 0.1;
//   population = new Array(10000);
//   letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
//   for (let i = 0; i < population.length; i++) {
//     population[i] = new DNA();
//   }
// }
//
// function draw() {
//   for (let member of population) {
//     member.calcFitness();
//   }
//
//   matingPool = [];
//
//   for (let i = 0; i < population.length; i++) {
//     let n = floor(population[i].fitness*100);
//     for (let j = 0; j < n; j++) {
//       matingPool.push(population[i]);
//     }
//   }
//
//   for (let k = 0; k < population.length; k++){
//     let parentA = matingPool[floor(random(0, matingPool.length))]
//     let parentB = matingPool[floor(random(0, matingPool.length))]
//
//     let child = parentA.crossover(parentB);
//     child.mutate(mutationRate);
//
//     population[k] = child;
//   }
// }

var population;
var target;
var mutationRate;
var letters;

function setup() {
  mutationRate = 0.1;
  target = "this is a string"
  letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
  population = new Population(1000, target, mutationRate);
  population.calcFitness();
  console.log(population);
}

function draw() {

}
