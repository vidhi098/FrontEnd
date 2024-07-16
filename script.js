// Single line and multiline comments
// This is a single line comment

/*
 * Multiline comment
 * This is a multiline comment
 */

// 2. Create an array consisting of fruits names and sort it in descending order on button click.
const fruits = ["Banana", "Apple", "Mango", "Cherry", "Orange"];

document.getElementById("sortButton").addEventListener("click", function() {
    fruits.sort((a, b) => b.localeCompare(a));
    document.getElementById("fruitsDisplay").innerText = fruits.join(", ");
});

// 3. FOR/IN loop example
const array = [1, 2, 3, 4, 5];
let forInOutput = "FOR/IN loop output: ";
for (let index in array) {
    forInOutput += array[index] + " ";
}
console.log(forInOutput);

// 4. Create an object "person" with properties firstname and lastname. Display using dot and bracket notation.
const person = {
    firstname: "John",
    lastname: "Doe"
};
console.log("Accessing properties using dot notation: " + person.firstname + " " + person.lastname);
console.log("Accessing properties using bracket notation: " + person["firstname"] + " " + person["lastname"]);

// 5. Variable hoisting example
console.log("Variable hoisting example:");
console.log(hoistedVar); // Outputs: undefined due to hoisting
var hoistedVar = "This variable is hoisted";
console.log(hoistedVar); // Outputs: This variable is hoisted

// 6. Strict mode example (already enabled by default in ES6 modules)

// 'this' keyword to hide button
document.getElementById("sortButton").onclick = function() {
    this.style.display = 'none';
};

// 2. Invoke a function using call() and apply(). Spot the difference between them.
function greet() {
    console.log("Hello, " + this.name);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

greet.call(person1); // Outputs: Hello, Alice
greet.apply(person2); // Outputs: Hello, Bob

// 3. Counter using simple JavaScript
let counter = 0;
function incrementCounter() {
    counter++;
    document.getElementById("counterValue").innerText = counter;
}

// 4. Counter using getter and setter
let counterAccessor = {
    _value: 0,
    get value() {
        return this._value;
    },
    set value(newValue) {
        this._value = newValue;
        document.getElementById("counterValueAccessor").innerText = this._value;
    }
};

function incrementCounterWithAccessor() {
    counterAccessor.value++;
}

// 5. Show current date and time on button click
document.getElementById("dateButton").addEventListener("click", function() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById("dateTimeDisplay").innerText = dateTimeString;
});

// 2. JavaScript validation for form submission
function validateForm() {
    const textInput = document.getElementById("textInput").value;
    if (textInput.trim() === "") {
        alert("Text box cannot be empty!");
        return false;
    }
    return true;
}

// 3. Using console.log() for debugging
function debugFunction() {
    console.log("This function is for debugging purposes.");
}

// 4. Cookie operations
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

function checkCookie(name) {
    const cookieValue = getCookie(name);
    if (cookieValue !== "") {
        console.log(name + " cookie found with value: " + cookieValue);
    } else {
        console.log(name + " cookie not found.");
    }
}

// 5. Using object prototypes to add properties to functions
function MyFunction() {
    // Function body
}

MyFunction.prototype.additionalProperty = "Additional Property";

// Example usage:
const myFunctionInstance = new MyFunction();
console.log("Additional Property of MyFunction:", myFunctionInstance.additionalProperty);
