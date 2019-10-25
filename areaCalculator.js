function calculateRectangleArea(length, width){
  if (length > 0 && width >0){
  var result;
  result = length * width;
  return result;
  }
}

function calculateTriangleArea(base, height){
  if (base > 0 && height >0){
  var result;
  result = (base * height)/2;
  return result;
  }
}

function calculateCircleArea(radius){
  if (radius>0){
  result;
  result = Math.PI * Math.pow(radius,2);
  return result;
  }
}



