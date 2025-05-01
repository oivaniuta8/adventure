import chalk from 'chalk';

// Завдання 4.1

let radius = 10;
let circleArea = Math.PI * radius ** 2;
let roundedCircleArea = circleArea.toFixed(2);

console.log(chalk.green("Площа кола дорівнює", roundedCircleArea));

// Завдання 4.1.1

let radius2 = 40;
let circleArea2 = Math.PI * Math.pow(radius2, 2);
let roundedCircleArea2 = circleArea2.toFixed(2);

console.log(chalk.magenta("Площа кола дорівнює", roundedCircleArea2));

// Завдання 4.2

let length = 10;
let width = 15;
let area = length * width;
let roundedArea = area.toFixed(2);

console.log(chalk.yellow("Площа прямокутника дорівнює", roundedArea));

// Завдання 4.3

let radius3 = 3.2;
let height = 4.5;
let volume = Math.PI * Math.pow(radius3, 2) * height;
let roundedVolume = volume.toFixed(2);

console.log(chalk.blue("Об'єм циліндра дорівнює", roundedVolume));

