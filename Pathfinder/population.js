class Population {
  constructor(num, start, end, mutationRate) {
    this.population = new Array(num);
    this.start = start;
    this.end = end;
    this.mutationRate = mutationRate;

    for (let i = 0; i < num; i++) {
      this.population[i] = new PathFinder();
    }
  }

  calcFitness() {
    for (let member of this.population) {
      member.calcFitness();
    }
  }

  //mating strategy
  createMatingPool() {
    this.matingPool = [];
    //
  }

  //reproduction strategy
  reproduce() {

  }
}
