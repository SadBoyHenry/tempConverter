// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahren) {}

/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
function createMessage(fahren, celc) {}

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

function convertToCelsius(fahrenheit) {
     celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

function createMessage(fahrenheit, celsius) {
    if (celsius < 0) {
        return "Freezing! " + fahrenheit + "°F is " + celsius + "°C.";
    } else if (celsius >= 0 && celsius < 15) {
        return "Chilly. " + fahrenheit + "°F is " + celsius + "°C.";
    } else if (celsius >= 15 && celsius < 25) {
        return "Comfortable. " + fahrenheit + "°F is " + celsius + "°C.";
    } else if (celsius >= 25 && celsius < 35) {
        return "Warm. " + fahrenheit + "°F is " + celsius + "°C.";
    } else {
        return "Hot! " + fahrenheit + "°F is " + celsius + "°C.";
    }
}

function rand(limit) {
    return Math.floor(Math.random() * (limit + 1));
}