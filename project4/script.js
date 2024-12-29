const container = document.querySelector('.container')

function createGrid(size){
  container.innerHTML = '';
  
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`

  container.style.gridTemplateRows = `repeat(${size}, 1fr)`

for(let i = 1; i<= size * size; i++){
  const square = document.createElement('div')
  square.classList.add('square');

  container.appendChild(square)
}
}
createGrid(200);

const squares = document.querySelectorAll('.square')
squares.forEach((square) =>{
square.addEventListener('mouseover',()=>{
  square.style.background = 'black';
});
});
