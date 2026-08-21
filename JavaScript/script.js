// challenge 1: Greet yourself
const myName = "Kores";
console.log(`Hello, ${myName}!`);

// challenge 2: calculate Rectangle area

const width = 12;
const height = 8;
const area = width * height;

console.log(`The area of the rectangle is ${area} square units.`);

// challenge 3 : celcius to Fahrenheit

const celcius = 25;
const fahrenheit = (celcius * 9/5)+32;
console.log(`${celcius}°C is ${fahrenheit}°F`);

//challenge 4: Even or Odd

const number =17;
const isEven = number % 2 === 0;
console.log(`${number} is even: ${isEven}`);

//challenge 5: combine two Arrays

const eastAfrica = ["Kenya","Uganda","Tanzania"];
const westAfrica = ["Nigeria","Ghana","Senegal"];

const combined = [...eastAfrica, ...westAfrica];

console.log(combined);

// challenge 6: Template Literal Sentence
const item="laptop";
const priceKES = 85000;
const shop = "Luthuli Avenue";

console.log(`I bought a ${item} for KES ${priceKES} from a shop on ${shop}.`);