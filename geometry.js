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
    return (this.width + this.length) * 2;
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
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * @returns {boolean} true if the triangle is isosceles
   * @see http://en.wikipedia.org/wiki/Isosceles_triangle#By_relative_lengths_of_sides
   */
  isIsosceles() {
    if (this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * @returns {boolean} true if the triangle is obtuse
   * @see http://en.wikipedia.org/wiki/Isosceles_triangle#By_internal_angles
   * 
   * sqa > sqc + sqb || 
            sqb > sqa + sqc || 
            sqc > sqa + sqb
   */

  //Math.sqrt(this.sideA) + (Math.sqrt(this.sideB) > Math.sqrt(this.sideC))
  isObtuse() {
    if (Math.pow(this.sideA, 2) + (Math.pow(this.sideB, 2) > Math.pow(this.sideC, 2))
      || Math.pow(this.sideA, 2) > (Math.pow(this.sideB, 2) + Math.pow(this.sideC, 2))
      || Math.pow(this.sideA, 2) + (Math.pow(this.sideC, 2) > Math.pow(this.sideB, 2))) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * calculates the area of the Triangle
   * @returns {number} the area of the Triangle
   * @see http://en.wikipedia.org/wiki/Heron%27s_formula
   */

  //  Math.sqrt(this.sideA) + Math.sqrt(this.sideB) === Math.sqrt(this.sideC)
  area() {
    // calculate the semi-perimeter
    let s = (this.sideA + this.sideB + this.sideC) / 2;

    //calculate the area
    let areaValue = Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC)
    )
    return areaValue;
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

  // start(3,5) -> end(8, 10)
  length() {
    Math.sqrt(this.start) + Math.sqrt(this.end);
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle,
  Triangle,
  LineSegment,
};
