class Population {
  constructor(num, target, mutationRate) {
    this.population = new Array(num);
    for (let i = 0; i < num; i++) {
      this.population[i] = new DNA();
    }
    this.matingPool = null;
    this.mutationRate = mutationRate;
  }

  calcFitness() {
    for (let member of this.population) {
      member.calcFitness();
    }
  }

  createMatingPool() {
    this.matingPool = [];
    for (let i = 0; i < this.population.length; i++) {
      let n = floor(this.population[i].fitness*100);
      for (let j = 0; j < n; j++) {
        this.matingPool.push(this.population[i]);
      }
    }
  }

  reproduce() {
    for (let k = 0; k < this.population.length; k++){
      let parentA = this.matingPool[floor(random(0, this.matingPool.length))];
      let parentB = this.matingPool[floor(random(0, this.matingPool.length))];

      let child = parentA.crossover(parentB);
      child.mutate(this.mutationRate);

      this.population[k] = child;
    }
  }
}
