const main = document.getElementById('main');

let input = document.getElementById('color');

const button = document.getElementById('color_button');

let figure = document.getElementById('figure_select');



main.addEventListener('change', (event) => {

  figure.className = main.value;
});

button.addEventListener('click', function (event) {

  figure.style.backgroundColor = input.value;
})