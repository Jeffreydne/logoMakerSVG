const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const {Circle, Square, Triangle} = require('./lib/shapes.js');
// const {Triangle, Circle, Square} = require('./lib/shapes.js');

inquirer
.prompt([
    {
        type: 'list',
        message: 'Please choose a shape for your SVG logo ',
        choices: ['circle', 'triangle', 'square'],
        name:'shapeChosen',
    },
    {
        type: 'input',
        message: 'Please enter a color for your shape- the color must be a standard css color such as blue or rebeccapurple:',
        name:'logoColorChosen',
    },
    {
        type: 'input',
        message: 'Please enter the 1-3 characters you want inside your SVG logo:',
        name:'textChosen',
    },
    {
        type: 'input',
        message: 'Please enter the color you want these characters to be:',
        name:'textColorChosen',
    },
])
.then((response) => {
    switch(response.shapeChosen) {
        case "triangle":
            let triangleToRender = new Triangle(response.logoColorChosen, response.textChosen, response.textColorChosen);
            return writeFile(`./examples/${response.shapeChosen}Logo.svg`, triangleToRender.render());
            break;
        case "square":
            let squareToRender = new Square(response.logoColorChosen, response.textChosen, response.textColorChosen);
            return writeFile(`./examples/${response.shapeChosen}Logo.svg`, squareToRender.render());
            break;
        case "circle":
            let circleToRender = new Circle(response.logoColorChosen, response.textChosen, response.textColorChosen);
            return writeFile(`./examples/${response.shapeChosen}Logo.svg`, circleToRender.render());
            break;
        default:
            console.log("You didn't pick a shape.");
            break;
    }
});