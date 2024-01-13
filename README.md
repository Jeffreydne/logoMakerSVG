# logoMakerSVG
Makes simple SVG logos with up to 3 letters inside
---

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |
| JavaScript     | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| Node.js | [https://nodejs.org/](https://nodejs.org/)     |
| Inquirer NPM package | [https://www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer)  
| Jest NPM testing package | [https://www.npmjs.com/package/jest](https://www.npmjs.com/package/jest)   |

---

## Badges
![Static Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Static Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Static Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Static Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Static Badge](https://img.shields.io/badge/License-MIT_License-blue)

---

## Description

[Watch the video explaining how to use the site](https://watch.screencastify.com/v/2Pfrj03F8dGSHQ3OSs32)

[Visit the Github repository](https://github.com/Jeffreydne/logoMakerSVG)

This application alows a user to make a simple SVG logo with up to 3 letters of any text color, inside a shape of a different color. The shape options are circle, square and triangle. Any color name used by css can be input by the user. 

---

## Instalation

This application requires the npm module inquirer. If you do not already have this module installed globally then you will need to type npm install in the command line before running this program. For testing purposes the npm module jest is also installed.


---

## Code Example

The below JavaScript example shows the use of inquirer in order to ask the first question:

```JS
const inquirer = require('inquirer');
inquirer
.prompt([
    {
        type: 'list',
        message: 'Please choose a shape for your SVG logo ',
        choices: ['circle', 'triangle', 'square'],
        name:'shapeChosen',
    },
```
The below Javascript example show how the infomration obtained in the prompts is used to make a new SVG file. In the index.js file (not shown) a switch statement is used to determine which class to use (Circle, Square or Triangle), then a new instance of that class is instantiated followed by calling the render method from that class within the fs.writeFile method to produce the new file. 

Shown below is the Class constructor that will be used when the user chooses a circle. This method will feed the users choices into the new object and use the render method to produce the logo: 

```JS
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

```
## Usage

This website is designed to allow a user to fill in the information they need to build an SVG logo file for thier project. It is in an easy to use CLI application, which uses the NPM module Inquirer. The basic template is stored in this app so all the user needs to do is fill in the pertinent information. 

---

## Learning Points

I developed this website from scratch. 

* The npm fs.writeFile method is used to write a new SVG file based on user input

*  The npm Inquirer module is used to ask the user various quesitons on the command line. Their answers are then stored as variables and then fed into the template using template literals and interpolation

*  The npm init and install functions are used on the command line to allow the use of the above npm features. 

*  Badges are used to show the skills and license being used

* The npm jest package is used to test that each shape Class works correctly to give the desired output based on user input.

*  Screencastify is used to make a video explaining how this website is used. 

---

## Author Info

### Jeffrey Nelson


* [Portfolio](https://jeffreydne.github.io/Jeff-Nelson-Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/jeffrey-nelson13/)
* [Github](https://github.com/Jeffreydne)

---
## Credits

 The excellent staff at UC Berkeley Extension Full Stack Bootcamp provided the beginings of the table of technology used in this README.md.  I copied badges from Vedant Chainani at the website https://dev.to/envoy_/150-badges-for-github-pnk#contents 
 


---

## License

MIT License

---


