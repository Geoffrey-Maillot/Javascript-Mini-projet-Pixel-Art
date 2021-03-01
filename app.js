const colorPicker = {
  gridSize: 25,
  element: null,
  // propriété qui sert à stocké la couleurs du picker
  color: null,
  isDown: false,

  // Récupère les div de la palette et pose un écouteur
  getColor() {
    for (let index = 1; index < 51; index = +1) {
      const color = document.getElementById(`color-${index}`);
      color.addEventListener(`click`, colorPicker.saveColor);
    }
  },

  // Sauvegarde la couleurs de la palette qui a été cliquer
  saveColor(event) {
    colorPicker.color = event.target.id;
  },

  // Génère la grille
  generateGrill(gridSize, size) {
    for (let row = 0; row < gridSize; row = +1) {
      const createRow = document.createElement(`div`);
      createRow.className = `row`;
      colorPicker.element.appendChild(createRow);
      for (let cell = 0; cell < gridSize; cell = +1) {
        const createCell = document.createElement(`div`);
        createCell.classList.add('cell', size);
        createRow.appendChild(createCell);
        createCell.addEventListener(
          `mousedown`,
          colorPicker.handlerChangeColorMouseDown
        );
        createCell.addEventListener(
          `mouseover`,
          colorPicker.handlerChangeColorMouseMove
        );
        createCell.addEventListener(
          `mouseup`,
          colorPicker.handlerChangeColorMouseUp
        );
      }
    }
  },

  // Applique la couleur à la cellule
  handlerChangeColorMouseDown(event) {
    const { target } = event;
    if (event.target.id === colorPicker.color) {
      target.id = ``;
    } else target.id = colorPicker.color;
    colorPicker.isDown = true;
  },
  handlerChangeColorMouseMove(event) {
    const { target } = event;
    if (colorPicker.isDown) {
      if (event.target.id === colorPicker.color) {
        target.id = ``;
      } else target.id = colorPicker.color;
    }
  },
  handlerChangeColorMouseUp() {
    colorPicker.isDown = false;
  },

  // Formulaire pour dimentionner la grille et les cellules
  sizeGrill() {
    const formElem = document.getElementById(`configuration`);
    formElem.addEventListener(`submit`, (event) => {
      event.preventDefault();

      const inputSizeGrillElem = document.getElementById(`size`);
      const inputSizeCellElem = document.getElementById(`cellSize`);
      colorPicker.gridSize = inputSizeGrillElem.valueAsNumber;
      const value = inputSizeCellElem.valueAsNumber;
      inputSizeGrillElem.innerHTML = ``;
      inputSizeCellElem.innerHTML = ``;
      colorPicker.element.innerHTML = ``;

      if (value === 10 || value === 20 || value === 30) {
        const sizeCell = `cell-${value}`;
        colorPicker.generateGrill(colorPicker.gridSize, sizeCell);
      } else {
        colorPicker.element.innerHTML = `Définissez la taille de la grille
              puis
              choisissez la taille des  cellules entre 10, 20 ou 30`;
      }
    });
  },

  init() {
    colorPicker.element = document.getElementById(`containerGrill`);
    colorPicker.generateGrill(colorPicker.gridSize, `cell-20`);
    colorPicker.getColor();
    colorPicker.sizeGrill();
  },
};

document.addEventListener(`DOMContentLoaded`, colorPicker.init);
