console.log("Counter Application loaded successfully");

const countElement = document.getElementById("count");
const incrementButton = document.getElementById("btn");
const decrementButton = document.getElementById("btn2");

let count = 0;

if (incrementButton) {
    incrementButton.addEventListener("click", () => {
        count++;
        countElement.innerText = count;
    })
}

if (decrementButton) {
    decrementButton.addEventListener("click", () => {
        count--;
        countElement.innerText = count;
    })
}
