const squares = document.querySelector("#squares");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        const squareDiv = `<div class="square bg-blue">${"FizzBuzz"}</div>`;
        squares.innerHTML += squareDiv;
    }
    else if (i % 3 === 0) {
        const squareDiv = `<div class="square bg-red">${"Fizz"}</div>`;
        squares.innerHTML += squareDiv;
    }
    else if (i % 5 === 0) {
        const squareDiv = `<div class="square bg-green">${"Buzz"}</div>`;
        squares.innerHTML += squareDiv;
    }
    else {
        const squareDiv = `<div class="square bg-normal">${i}</div>`;
        squares.innerHTML += squareDiv;
    }
}