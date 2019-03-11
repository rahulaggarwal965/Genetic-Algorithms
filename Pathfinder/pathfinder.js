class PathFinder {
  constructor(x, y) {
    // this.x = start.posX;
    // this.y = start.posY;
    this.x = x;
    this.y = y;
    //this.dna = randomMoveSet([], 50, start.posX/res, start.posY/res);
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

  fireRays(n) {
    let dAngle = TWO_PI/n;
    for (let i = 1; i <= n; i++) {
      let maxDist = sqrt(windowWidth*windowWidth + windowHeight*windowHeight);
      let edgeX = this.x - maxDist * cos(dAngle * i);
      let edgeY = this.y - maxDist * sin(dAngle * i);
      let sPoint = {x: edgeX, y: edgeY};
      for (let box of solid) {
        let hit = intersectRect(this.x, this.y, edgeX, edgeY, box.posX, box.posY, box.width, box.width);
        if(hit[0]) {
          let tPoint = hit[1];
          if (dist(this.x, this.y, tPoint.x, tPoint.y) < dist(this.x, this.y, sPoint.x, sPoint.y)) {
            sPoint = tPoint;
          }
        }
      }
      stroke(150);
      line(this.x, this.y, sPoint.x, sPoint.y);
      noStroke();
      fill(255, 0, 0);
      ellipse(sPoint.x, sPoint.y, 10, 10);

    }
  }

  // ray(mx, my) {
  //   for (let box of solid) {
  //     let hit = intersectRect(this.x, this.y, mx, my, box.posX, box.posY, box.width, box.width);
  //   };
  //   stroke(150);
  //
  //   line(this.x, this.y, mx, my)
  // }

  move(mx, my) {
    this.x = mx;
    this.y = my;
  }
}
