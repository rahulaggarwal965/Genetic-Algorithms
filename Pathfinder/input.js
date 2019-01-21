class Input {
  constructor() {
    this.fillState = false;
  }

  handleKeys(keyNum) {
    if(keyNum === 'a') {
      this.fillState = (this.fillState === "start" ? false : "start");
    }
    if(keyNum === 'd') {
      this.fillState = (this.fillState === "end" ? false : "end");
    }
  }

  handleMouse() {
    if(mouseIsPressed) {
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++ ) {
          grid[i][j].checkContact(mouseX, mouseY, mouseButton, this.fillState);
        }
      }
    }
  }
}
