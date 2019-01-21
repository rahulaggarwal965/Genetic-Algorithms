class DNA {
  constructor() {
    this.string = randomChars(target.length)
    this.fitness = null;
  }

  calcFitness() {
    var score = 0;
    for (let i = 0; i <= this.string.length - 1; i++){
      if (this.string[i] == target.charAt(i)){
        score += 1;
      }
    }
    this.fitness = score/target.length;
  }

  crossover(partner) {
    let child = new DNA();

    let midpoint = floor(random(0,this.string.length));

    for (let i = 0; i < this.string.length; i++) {
      if( i > midpoint) {
        child.string[i] = this.string[i];
      } else {
        child.string[i] = partner.string[i];
      }
    }

    return child;
  }

  mutate(mutationRate) {
    for (let i = 0; i < this.string.length; i++) {
      if(random() < mutationRate) {
        this.string[i] = random(letters);
      }
    }
  }
};
