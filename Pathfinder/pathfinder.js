class PathFinder {
  constructor() {
    this.x = start.posX;
    this.y = start.posY;
    this.dna = randomMoveSet([], 50, start.posX/res, start.posY/res);
    this.fitness;
    this.penalties = 0;
  }

  calcFitness() {
    let toEndDist = sqrt(pow((end.posX - this.x)/res, 2) + pow((end.posY - this.y)/res, 2))
    let startEndDist = sqrt(pow((end.posX - start.x)/res, 2) + pow((end.posY - start.y)/res, 2))
    let fitness = (startEndDist - toEndDist)/startEndDist - 0.1 * penalties;
  }

  crossover(partner) {
    let child = new PathFinder();
  }

  // fireRays(n) {
  //   let dAngle = 360/n
  //   for (let i = 0; i < n; i++) {
  //     line()
  //   }
  // }
}
