let userName = "John";
let age = 11;
let isAdult = age >= 18;

console.log("Вік:", age);
console.log("Чи повнолітній?", isAdult);

if (isAdult) {
    console.log("Come in, " + userName + "");
} else {
        console.log(`Go home, ${userName}`);
}