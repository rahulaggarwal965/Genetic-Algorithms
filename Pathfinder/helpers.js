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

function intersectLine(x1, y1, x2, y2, x3, y3, x4, y4) {
  let h = ((x4 - x3)*(y1 - y3) - (y4 - y3)*(x1-x3)) / ((y4 - y3)*(x2-  x1) - (x4 - x3)*(y2 - y1));
  let g = ((x2 - x1)*(y1 - y3) - (y2 - y1)*(x1-x3)) / ((y4 - y3)*(x2 - x1) - (x4 - x3)*(y2 - y1));
  if (h >=  0 && h <= 1 && g >= 0 && g <= 1) {
    let intPoint = {x: x1 + (h * (x2 - x1)), y: y1 + (h * (y2 - y1))}
    return [true, intPoint, dist(x1, y1, intPoint.x, intPoint.y)];
  }
  return [false, null, Infinity];
}

function intersectRect(x1, y1, x2, y2, rx, ry, rw, rh) {
  let left = intersectLine(x1,y1,x2,y2, rx,ry,rx, ry+rh);
  let right = intersectLine(x1,y1,x2,y2, rx+rw,ry, rx+rw,ry+rh);
  let top = intersectLine(x1,y1,x2,y2, rx,ry, rx+rw,ry);
  let bottom = intersectLine(x1,y1,x2,y2, rx,ry+rh, rx+rw,ry+rh);

  if (left[0] || right[0] || top[0] || bottom[0]) {
  let tPArr = [left[1], right[1], top[1], bottom[1]];
  let tArr = [left[2], right[2], top[2], bottom[2]];
  let tPoint = tPArr[tArr.indexOf(min(tArr))];
    return [true, tPoint];
  }
  return false;
}
