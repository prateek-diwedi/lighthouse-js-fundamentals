function howManyHundreds(num){
  var divide;
  var roundOff;
  var container
  divide = num%100;
  roundOff = num - divide;
  container = roundOff / 100;

  return container;

}

console.log(howManyHundreds(400));