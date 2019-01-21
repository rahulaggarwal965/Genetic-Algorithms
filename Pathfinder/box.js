class Box {
  constructor(posX, posY, width) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;

    this.fillOptions = Object.freeze({solid: 0, clear: 255, start: 'rgb(0, 0, 205)', end: 'rgb(255, 0, 0)'});
    this.fillState = "clear";
  }

  render() {
    fill(this.fillOptions[this.fillState]);
    rect(this.posX, this.posY, this.width, this.width);
  }

  checkContact(mx, my, mouseButton, fillState) {
    if(mx >= this.posX && mx <= this.posX + this.width && my >= this.posY && my <= this.posY + this.width) {

     if(mouseButton === RIGHT) {
       this.fillState = "clear";
       if (solid.includes(this)) {
         solid.remove
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
       this.fillState = "solid";
     }
    }
  }
}
