// import the 3 class constructors to be tested from the shapes.js file
const {Circle, Square, Triangle} = require('./shapes.js');

//test the Circle.render() method
describe('Circle.render()', () => {
    it('should take a shapeColor, a string of 3 characters (chars), and a textColor and render a circle with given input', () => {
        let shapeColor = "blue"
        let chars = "jdn"
        let textColor = "white"
        const shape = new Circle(shapeColor, chars, textColor);
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="blue" />
      
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="white">jdn</text>
      
      </svg>`);
    });
  });

  //test the Square.render() method
  describe('Square.render()', () => {
    it('should take a shapeColor, a string of 3 characters (chars), and a textColor and render a square with given input', () => {
        let shapeColor = "blue"
        let chars = "jdn"
        let textColor = "white"
        const shape = new Square(shapeColor, chars, textColor);
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="70" y="20" width="160" height ="160" fill="blue" />
      
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="white">jdn</text>
      
      </svg>`);
    });
  });
  //test the Triangle.render() method
  describe('Triangle.render()', () => {
    it('should take a shapeColor, a string of 3 characters (chars), and a textColor and render a circle with given input', () => {
        let shapeColor = "blue"
        let chars = "jdn"
        let textColor = "white"
        const shape = new Triangle(shapeColor, chars, textColor);
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="50,170 150,10 250,170" fill="blue" />
      
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="white">jdn</text>
      
      </svg>`);
    });
  });