let inputValue = document.getElementById('input');
let send = document.getElementById('send');
let minus = document.getElementById('minus');
let counter = document.getElementById('counter');
let plus = document.getElementById('plus');
let color = document.getElementById('inputColor');

let count = 0;

plus.addEventListener('click', () => { 
    count++;
    counter.innerText = count;
});

minus.addEventListener('click', () => { 
    count--;
    counter.innerText = count;
});

send.addEventListener('click', () => {
    count = inputValue.value;
    counter.innerText = count;
});

color.addEventListener('input', (e) => {
    counter.style.color = e.target.value;
});