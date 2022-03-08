const squares = document.querySelector("#squares");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        const squareDiv = `<div class="square">${"FizzBuzz"}</div>`;
        squares.innerHTML += squareDiv;
    }
    else if (i % 3 === 0) {
        const squareDiv = `<div class="square">${"Fizz"}</div>`;
        squares.innerHTML += squareDiv;
    }
    else if (i % 5 === 0) {
        const squareDiv = `<div class="square">${"Buzz"}</div>`;
        squares.innerHTML += squareDiv;
    }
    else {
        const squareDiv = `<div class="square">${i}</div>`;
        squares.innerHTML += squareDiv;
    }
}