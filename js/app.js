var container = document.querySelector(".tictac");
var startButton = document.getElementById("startButton");
startButton.addEventListener("click", start);
//dando una posicion especifica a las casillas
container.addEventListener("click",onCellClick);
function onCellClick(event){
  var target = event.target;
  var dataset = target.dataset;
  //console.log(dataset);
//console.log("target",target);
if(dataset && dataset.row){
  console.log("pos", dataset.row, dataset.column);
}
}
//crear una matriz vacia
function TicTacToe(){
  this.matrix = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
  ]
}
//reemplazar los valores en la matriz
TicTacToe.prototype.output = function () {
  return this.matrix;
}

function start(){
//console.log(start);
var game = new TicTacToe();
render(game.output());
}

function render (matrix){
//reduce simplifica o transforma la forma en la que esta nuestro arreglo (en este caaso la matriz)
//array.reduce(funcion(valor inicial,el que esta iterando en el momento,indice),[valor donde quieres inicializarlo])
var values = matrix.reduce(function(array,row,rowIndex){
  //map recorre cada uno de los valores y los transforma
  return array.concat(row.map(function(cell, cellIndex){
    return{
      value: cell,
      id: "cell-" + rowIndex + "_" + cellIndex
    };
  }));
},[]);
console.log(values);
}

start();
