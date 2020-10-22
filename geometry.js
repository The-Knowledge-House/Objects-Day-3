/**
 * Class representing a Rectangle
 */
class Rectangle {
  /**
   * Create a Rectangle.
   * @param {number} length - The length of the rectangle.
   * @param {number} width - The width of the rectangle.
   */
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  /**
   * determines if the rectangle is a square
   * @return {boolean} true if the rectangle is a square
   */
  isSquare() {
     return this.length === this.width;
  }

  /**
   * calculates the area of the rectangle
   * @return {number} the area of the rectangle
   */
  area() {
    return this.length * this.width;
  }

  /**
   * calculates the perimeter of the rectangle.
   * @returns {number} the perimeter of the rectangle
   */
  perimeter() {
    return (2 * this.length) + (2 * this.width);
  }
}

/**
 * Class representing a Triangle
 */
class Triangle {
  /**
   * Create a Triangle.
   * @param {number} sideA - The length of side A.
   * @param {number} sideB - The length of side B.
   * @param {number} sideC - The length of side C.
   */
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  /**
   * @returns {boolean} true if the triangle is equilateral
   * @see http://en.wikipedia.org/wiki/Equilateral_triangle
   */
  isEquilateral() {
    if(this.sideA != this.sideB && this.sideB != this.sideC){
      return false
    }
    return true;
  }

  /**
   * @returns {boolean} true if the triangle is isosceles
   * @see http://en.wikipedia.org/wiki/Isosceles_triangle#By_relative_lengths_of_sides
   */
  isIsosceles() {
    if(this.sideA === this.sideB){
      if (this.sideA != this.sideC){
        return true;
      }
    }else if (this.sideA === this.sideC){
      if (this.sideA != this.sideB){
        return true;
      }
    } else if (this.sideB === this.sideC){
      if (this.sideA != this.sideB){
        return true;
      }
    } else {
      return false;
    }
  }

  /**
   * @returns {boolean} true if the triangle is obtuse
   * @see http://en.wikipedia.org/wiki/Isosceles_triangle#By_internal_angles
   */
  isObtuse() {
    if ( Math.pow(this.sideA,2) + Math.pow(this.sideB,2) < Math.pow(this.sideC,2) || Math.pow(this.sideA,2) + Math.pow(this.sideC,2) < Math.pow(this.sideB,2) || Math.pow(this.sideC,2) + Math.pow(this.sideB,2) < Math.pow(this.sideA,2)){
      return true
    } else {
      return false;
    }
  }

  /**
   * calculates the area of the Triangle
   * @returns {number} the area of the Triangle
   * @see http://en.wikipedia.org/wiki/Heron%27s_formula
   */
  area() {
    return (this.sideA + this.sideB + this.sideC) / 2;
  }
}

/**
 * Class representing a Line Segment
 */
class LineSegment {
  /**
   * Create a Line Segment.
   * @param {{x: number, y: number}} start - the start position of the line.
   * @param {{x: number, y: number}} end - the end position of the line.
   */
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  /**
   * calculates the length of the (start.x, start.y) --> (end.x, end.y)
   * @returns {number} the length of the line segment
   * @see http://en.wikipedia.org/wiki/Pythagorean_theorem
   */
  length() {}
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle,
  Triangle,
  LineSegment,
};
