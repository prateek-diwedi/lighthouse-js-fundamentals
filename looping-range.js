function range(start, end, step){
  var rangeArray = [];
  for (var num = start; num < end; num += step){
    rangeArray.push(num);
    
  }
  return rangeArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));