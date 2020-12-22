function isAdult(num) {
  return num >= 18;
}
function checkMultiplicity(num1, num2) {
  return num1 % num2 === 0;
}
function isTriangle(num1, num2, num3) {
  return num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1;
}
function squareRhombusHeight(num1, num2) {
  return num1 * num2;
}
function squareRhombusDiagonals(num1, num2) {
  return num1 * num2 * 0.5;
}
function squareCylinder(radius, heigt) {
  return radius * heigt * Math.PI * 2;
}
function squareTriangle(side, heigt) {
  return 0.5 * side * heigt;
}
function squareRectangle(num1, num2) {
  return num1 * num2;
}
