// this file contains the 3 class constructors that will render the code to build the desired SVG file
// Circle class renders the code for an SVG file that builds a 300px X 200 px circle with the color, inner text, and text color that a user chooses
class Circle {
    constructor (shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`;
    }
}
// Square class renders the code for an SVG file that builds a 300px X 200 px square with the color, inner text, and text color that a user chooses
class Square {
    constructor (shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="70" y="20" width="160" height ="160" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`;
    }
}
// Triangle class renders the code for an SVG file that builds a 300px X 200 px triangle with the color, inner text, and text color that a user chooses
class Triangle {
    constructor (shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="50,170 150,10 250,170" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`;
    }
}

// export the 3 shapes class constructors so the they can be used in index.js
module.exports = {Circle, Square, Triangle};