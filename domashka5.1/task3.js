import chalk from 'chalk';

let number = 3;

for (let i = 0; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

// while


let number2 = 4;
let i2 = 1;

while (i2 <= 10) {
    console.log(chalk.green(`${number2} * ${i2} = ${number2 * i2}`));
    i2++;
}