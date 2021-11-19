document.getElementById('main').addEventListener('change', function () {
  var style = this.value == 'one' ? 'block' : 'none';
  document.getElementById('hidden_square').style.display = style;

  var style = this.value == 'two' ? 'block' : 'none';
  document.getElementById('hidden_circle').style.display = style;

  var style = this.value == 'three' ? 'block' : 'none';
  document.getElementById('hidden_rectangle').style.display = style;
});

var colorInput = document.getElementById('color');
var colorFigureSquare = document.getElementsByClassName('figure')[0];
var colorFigureCircle = document.getElementsByClassName('figure')[1];
var colorFigureRectangle = document.getElementsByClassName('figure')[2];

colorFigureSquare.style.backgroundColor = colorInput.value;
colorFigureCircle.style.backgroundColor = colorInput.value;
colorFigureRectangle.style.backgroundColor = colorInput.value;

document.getElementById('color_button').addEventListener(
  'click',
  function () {
    colorFigureSquare.style.backgroundColor = colorInput.value;
    colorFigureCircle.style.backgroundColor = colorInput.value;
    colorFigureRectangle.style.backgroundColor = colorInput.value;
  },
  false
);
