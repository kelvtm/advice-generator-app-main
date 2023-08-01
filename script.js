const diceButton = document.querySelector(".dice");
const numEl = document.querySelector(".num-el");
const adviceText = document.querySelector(".advice-text");
const url = "https://api.adviceslip.com/advice";
//  fetching API
diceButton.addEventListener("click", () => {
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      numEl.textContent = `ADVICE #${data.slip.id}`;
      adviceText.textContent = data.slip.advice;
      console.log(data);
    });
});

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
// async function fetchAdvice() {
//   const response = await fetch(url);
//   //   const data = await response.text();
//   //   adviceText.textContent = data;
//   console.log(response);
// }

// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// diceButton.addEventListener("click", fetchAdvice);
// const requestAdvice = fetch(url)
//   .then((response) => {
//     console.log(response);
//     return response.json;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// diceButton.addEventListener("click", fetchText);
// fetch APi
// function fetchAdvice() {
//    fetch('https://api.adviceslip.com')
//    .then(response => response.json())
//    .then(data => {
//       output.innerHTML += "id = " + data.id + "<br/>";
//       output.innerHTML += "brand = " + data.brand + "<br/>";
//       output.innerHTML += "category = " + data.category + "<br/>";
//       output.innerHTML += "price = " + data.price + "<br/>";
//       output.innerHTML += "rating = " + data.rating + "<br/>";
//       output.innerHTML += "stock = " + data.stock + "<br/>";
//    }
//    diceButton.addEventListener((click) )

// callback function Example
// function myCallbackFunction() {
//   console.log("Callback function executed!");
// }

// function myFunction(callback) {
//   console.log("My function is executing...");
//   //   callback();
//   setTimeout(callback, 3000);
// }

// myFunction(myCallbackFunction);
// // callback function Example
// setTimeout(() => {
//   console.log("Hello, javascript !");
// }, 1000);

// let greet_one = "Hello";
// let greet_two = "World!!!";
// console.log(greet_one);
// setTimeout(function () {
//   console.log("Asynchronous");
// }, 10000);
// console.log(greet_two);

// function add(x, y) {
//   return x + y;
// }

// function divide(x, y) {
//   return x / y;
// }

// function compute(callBack, x, y) {
//   return callBack(x, y);
// }

// console.log(compute(add, 10, 5)); // 2
// console.log(compute(divide, 10, 5));

// const request = fetch("https://course-api.com/react-store-products");
// console.log(request);

// const request = fetch("https://course-api.com/react-store-products")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
