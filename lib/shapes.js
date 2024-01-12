class Shapes {
    constructor(shape, shapeColor, text, textColor) {
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    // makeShapeString() {
    //     this.shape = `circle cx="150" cy="100" r="80"`;
    // }
    render() {
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${this.shape} fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`;
    }
}

module.exports = Shapes;