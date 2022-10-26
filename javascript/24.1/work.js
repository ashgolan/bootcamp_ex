function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}
Square.prototype.isSquared = function () {
  if (this.a === this.b && this.b === this.c && this.c === this.d) {
    return true;
  }
  return false;
};

const newSquare = new Square(5, 5, 5, 5);
console.log(newSquare.isSquared());
