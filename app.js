const colorPicker = {
  gridSize: 10,
  element: null,
  //propriété qui sert à stocké la couleurs du picker
  color: null,
  
  
  // Récupère les div de la palette et pose un écouteur
  getColor: function() {
    for(index = 1; index < 51; index++){
      const color = document.getElementById(`color-${index}`)
    color.addEventListener(`click`, colorPicker.saveColor)
    }
  },
  
  //Sauvegarde la couleurs de la palette qui a été cliquer
  saveColor: function (event){
    colorPicker.color = event.target.id
    console.log(colorPicker.color)
  }, 
  
  //Génère la grille
  generateGrill: function(gridSize, size) {
    
    for (row = 0; row < gridSize; row++) {
      const createRow = document.createElement(`div`);
      createRow.className  = `row`;
      colorPicker.element.appendChild(createRow);
      for(cell = 0; cell < gridSize; cell++) {
        const createCell = document.createElement(`div`);
        createCell.classList.add("cell", size);
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
  //Formulaire pour dimentionner la grille et les cellules
  sizeGrill: function () {
    formElem = document.getElementById(`configuration`);
    formElem.addEventListener(`submit`, (event) => {
    event.preventDefault()

      const inputSizeGrillElem = document.getElementById(`size`)
      colorPicker.gridSize = inputSizeGrillElem.valueAsNumber
      inputSizeGrillElem.innerHTML= ``;
      colorPicker.element.innerHTML = ``;
      

      const inputSizeCellElem = document.getElementById(`cellSize`)
      let value = inputSizeCellElem.valueAsNumber

        if (value === 10 || value === 20 || value === 30) {
          let sizeCell = `cell-${value}`
          colorPicker.generateGrill(colorPicker.gridSize, sizeCell)
        }
        else {
          colorPicker.element.innerHTML =
           `Définissez la taille de la grille
           puis
           choisissez la taille des  cellules entre 10, 20 ou 30`
        }
    } )
  },
 
  init: function() {
    colorPicker.element = document.getElementById(`containerGrill`);
    colorPicker.generateGrill(colorPicker.gridSize, `cell-20`)
    colorPicker.getColor()
    colorPicker.sizeGrill()
  },
}

document.addEventListener(`DOMContentLoaded`, colorPicker.init);