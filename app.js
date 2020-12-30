const colorPicker = {
  gridSize: 10,
  element: null,
  //propriété qui sert à stocké la couleurs du picker
  color: null,
  
  
  // Récupère les div de la palette et pose un écouteur
  getColor: function() {
    const blue = document.getElementById(`blue`)
    blue.addEventListener(`click`, colorPicker.saveColor)
    
    const red = document.getElementById(`red`)
    red.addEventListener(`click`, colorPicker.saveColor)
    
    const green = document.getElementById(`green`)
    green.addEventListener(`click`, colorPicker.saveColor)
    
    const purple = document.getElementById(`purple`)
    purple.addEventListener(`click`, colorPicker.saveColor)
    
    const orange = document.getElementById(`orange`)
    orange.addEventListener(`click`, colorPicker.saveColor)
    
    const grey = document.getElementById(`grey`)
    grey.addEventListener(`click`, colorPicker.saveColor)
    
    const yellow = document.getElementById(`yellow`)
    yellow.addEventListener(`click`, colorPicker.saveColor)
    
    const pink = document.getElementById(`pink`)
    pink.addEventListener(`click`, colorPicker.saveColor)
    
    const black = document.getElementById(`black`)
    black.addEventListener(`click`, colorPicker.saveColor)
    
    const white = document.getElementById(`white`)
    white.addEventListener(`click`, colorPicker.saveColor)
    
    
  },
  
  //Sauvegarde la couleurs de la palette qui a été cliquer
  saveColor: function (event){
    colorPicker.color = event.target.id
    console.log(colorPicker.color)
  }, 
  
  //Génère la grille
  generateGrill: function(gridSize) {
    
    for (row = 0; row < gridSize; row++) {
      const createRow = document.createElement(`div`);
      createRow.className  = `row`;
      colorPicker.element.appendChild(createRow);
      for(cell = 0; cell < gridSize; cell++) {
        const createCell = document.createElement(`div`);
        createCell.className = `cell`;
        createRow.appendChild(createCell);
        createCell.addEventListener(`click`, colorPicker.handlerChangeColor)
      }
    }
  },
  //Applique la couleur à la cellule
  handlerChangeColor: function (event) {
    
    if (event.target.id === colorPicker.color) {
      event.target.id = ``
    }
    else(event.target.id = colorPicker.color)
    
  },
  //Formulaire pour dimentionner la grille
  sizeGrill: function () {
    formElem = document.getElementById(`configuration`);
    formElem.addEventListener(`submit`, (event) => {
      
      event.preventDefault()
      const inputElem = document.getElementById(`size`)
      colorPicker.gridSize = inputElem.valueAsNumber
      inputElem.innerHTML= ``;
      colorPicker.element.innerHTML = ``
      
      colorPicker.generateGrill(colorPicker.gridSize)
      
    } )
  },
  
  init: function() {
    colorPicker.element = document.getElementById(`containerGrill`);
    colorPicker.generateGrill(colorPicker.gridSize)
    colorPicker.getColor()
    colorPicker.sizeGrill()
  },
}

document.addEventListener(`DOMContentLoaded`, colorPicker.init);