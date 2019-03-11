class Box {
  constructor(posX, posY, width) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;

    this.edges = [];
    for (let i = 0; i < 2; i++) {
      this.edges.push({x1: posX + (width * (i % 2)), y1: posY, x2: posX + (width * (i % 2)), y2: posY+ width});
      this.edges.push({x1: posX, y1: posY + (width * (i % 2)), x2: posX + width, y2: posY + (width * (i % 2))});
    }
    this.fillOptions = Object.freeze({solid: 0, clear: 255, start: 'rgb(0, 0, 205)', end: 'rgb(255, 0, 0)'});
    this.fillState = "clear";
  }

  render() {
    if(this.fillState === "clear") {
      noFill();
    } else {
      fill(this.fillOptions[this.fillState]);
    }
    rect(this.posX, this.posY, this.width, this.width);
  }

  showEdges() {
    for (let edge of this.edges) {
      stroke(255, 0, 0);
      line(edge.x1, edge.y1, edge.x2, edge.y2);
      noStroke();

    }
  }

  checkContact(mx, my, mouseButton, fillState) {
    if(mx >= this.posX && mx <= this.posX + this.width && my >= this.posY && my <= this.posY + this.width) {

     if(mouseButton === RIGHT) {
       this.fillState = "clear";
       if (solid.includes(this)) {
         let i = solid.indexOf(this);
         solid.splice(i, 1);
       }
     } else if(fillState != false) {
       if(fillState === "start") {
         if(start != this) {
           if(start) {
             start.fillState = "clear";
           }
           start = this;
           this.fillState = fillState;
         }
       }
       if(fillState === "end") {
         if(end != this) {
           if(end) {
             end.fillState = "clear";
           }
           end = this;
           this.fillState = fillState;
         }
       }
       return this;
     } else {
       if (!solid.includes(this)) {
         this.fillState = "solid";
         solid.push(this);
       }
     }
    }
  }
}
