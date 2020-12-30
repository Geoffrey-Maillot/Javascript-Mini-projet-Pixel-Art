const colorPicker = {
  gridSize: 8,
  element: null,
  color: null,


  // 
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

  saveColor: function (event){
    colorPicker.color = event.target.id
    console.log(colorPicker.color)
  }, 
  
  generateGrill: function(gridSize) {
    
    const containerElement = document.getElementById(`containerGrill`);
    
    for (row = 1; row < gridSize; row++) {
      const createRow = document.createElement(`div`);
      createRow.className  = `row`;
      containerElement.appendChild(createRow);
      for(cell = 1; cell < gridSize; cell++) {
        const createCell = document.createElement(`div`);
        createCell.className = `cell`;
        createRow.appendChild(createCell);
        createCell.addEventListener(`click`, colorPicker.handlerChangeColor)
      }
    }
  },

  handlerChangeColor: function (event) {
    console.log(event)
    console.log(colorPicker.color)
    event.target.id = colorPicker.color
  },
  
  init: function() {
    colorPicker.generateGrill(colorPicker.gridSize)
    colorPicker.getColor()
   
  },
}

document.addEventListener(`DOMContentLoaded`, colorPicker.init);