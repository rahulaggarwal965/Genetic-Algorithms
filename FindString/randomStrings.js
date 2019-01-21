function randomChars(len){
  var word  = [];
  for (let j = 1; j <= len; j++){
    word.push(random(letters));
  }
  return word;
}

function randomStrings(num, arr, len = false, maxLen = 10){
  for (let i = 1; i <= num; i++){
    var newLen = (len) ? len : floor(random(len, maxLen));
    var word  = randomChars(newLen);
    arr.push(word.join(''));
  }
}
