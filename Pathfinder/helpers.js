function array2D(cols, rows) {
  let arr = new Array(cols);
  for( let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function newRandomPosition(posX, posY) {
  let newPos = {x: random([posX - 1, posX, posX + 1]), y: random([posY - 1, posY, posY + 1])};
  if(newPos == {x: posX, y: posY}) {
    return newRandomPosition(posX, posY);
  } else {
    return newPos;
  }
}

function randomMoveSet(arr, length, posX, posY) {
  if(length === 0) {
    return arr;
  } else {
    arr.push(newRandomPosition(posX, posY));
    return randomMoveSet(arr, length - 1, posX, posY);
  }
}
