const game = {
  pixelColor: "grey", //default value

  // functions declarations
  handleValidateClick: function () {
    let validateButton = document.querySelector(".input-form__submit-button");
    // Handle validate button click;
    validateButton.addEventListener("click", (event) => {
      event.preventDefault();
      // Values
      console.log("You clicked validate");
      // Building the grid (play board)
      let gridSize = parseInt(
        document.querySelector(".input-form__grid_size").value
      );
      let pixelSize = parseInt(
        document.querySelector(".input-form__pixel_size").value
      );
      if (isNaN(gridSize) || isNaN(pixelSize)) {
        // Show error message
        document.querySelector(".user_input_error_msg_one").removeAttribute("hidden");
      } else if (gridSize > 60 || pixelSize > 100) {
        // Remove previous error message
        document.querySelector(".user_input_error_msg_one").setAttribute("hidden", true);

        // Show new error message
        document.querySelector(".user_input_error_msg_two").removeAttribute("hidden");
      } else {
        this.gridBuilder(gridSize, pixelSize);
        // Remove error message
        document.querySelector(".user_input_error_msg_one").setAttribute("hidden", true);

        document.querySelector(".user_input_error_msg_two").setAttribute("hidden", true);
      }
    });
  },

  handlePaletteClick: function () {
    // There are 4 colours.
    var colorElementOne = document.querySelector(".color_one");
    var colorElementTwo = document.querySelector(".color_two");
    var colorElementThree = document.querySelector(".color_three");
    var colorElementFour = document.querySelector(".color_four");
    var style;

    // Adding the clicks to the colors of palette.
    colorElementOne.addEventListener("click", () => {
      style = getComputedStyle(colorElementOne);
      this.pixelColor = style["background-color"];
      // Making the color icon a bit bigger when it's clicked
      // Other buttons return to their original size of 3rem.
      colorElementOne.style.height = "3.5rem";
      colorElementOne.style.width = "3.5rem";
      colorElementTwo.style.height = "3rem";
      colorElementTwo.style.width = "3rem";
      colorElementThree.style.height = "3rem";
      colorElementThree.style.width = "3rem";
      colorElementFour.style.height = "3rem";
      colorElementFour.style.width = "3rem";
      console.log("You clicked paletteColor: " + this.pixelColor);
    });

    colorElementTwo.addEventListener("click", () => {
      style = getComputedStyle(colorElementTwo);
      this.pixelColor = style["background-color"];
      colorElementTwo.style.height = "3.5rem";
      colorElementTwo.style.width = "3.5rem";
      colorElementOne.style.height = "3rem";
      colorElementOne.style.width = "3rem";
      colorElementThree.style.height = "3rem";
      colorElementThree.style.width = "3rem";
      colorElementFour.style.height = "3rem";
      colorElementFour.style.width = "3rem";
      console.log("You clicked paletteColor: " + this.pixelColor);
    });

    colorElementThree.addEventListener("click", () => {
      style = getComputedStyle(colorElementThree);
      this.pixelColor = style["background-color"];
      colorElementThree.style.height = "3.5rem";
      colorElementThree.style.width = "3.5rem";
      colorElementTwo.style.height = "3rem";
      colorElementTwo.style.width = "3rem";
      colorElementOne.style.height = "3rem";
      colorElementOne.style.width = "3rem";
      colorElementFour.style.height = "3rem";
      colorElementFour.style.width = "3rem";
      console.log("You clicked paletteColor: " + this.pixelColor);
    });

    colorElementFour.addEventListener("click", () => {
      style = getComputedStyle(colorElementFour);
      this.pixelColor = style["background-color"];
      colorElementFour.style.height = "3.5rem";
      colorElementFour.style.width = "3.5rem";
      colorElementTwo.style.height = "3rem";
      colorElementTwo.style.width = "3rem";
      colorElementThree.style.height = "3rem";
      colorElementThree.style.width = "3rem";
      colorElementOne.style.height = "3rem";
      colorElementOne.style.width = "3rem";
      console.log("You clicked paletteColor: " + this.pixelColor);
    });
  },

  gridBuilder: function (gridSize, pixelSize) {
    var gridContainerElement = document.querySelector(".grid_container");

    // Reseting the content jsut in case the grdi (board) already exists.
    gridContainerElement.innerHTML = "";

    for (var i = 0; i < gridSize; i++) {
      var gridLineElement = document.createElement("div");
      gridLineElement.style.display = "flex";
      gridLineElement.style.justifyContent = "center";
      gridLineElement.classList.add("grid-line_" + i);
      gridContainerElement.appendChild(gridLineElement);

      for (var j = 0; j < gridSize; j++) {
        var gridCellElement = document.createElement("div");
        gridCellElement.classList.add("grid-line_" + i + "_cell_" + j);

        gridCellElement.style.backgroundColor = "grey";
        gridCellElement.style.width = pixelSize + "px";
        gridCellElement.style.height = pixelSize + "px";
        gridCellElement.style.border = "2px solid #605b5b";

        // Add click to each cell
        gridCellElement.addEventListener("click", (ev) => {
          console.log("You clicked " + ev.target.classList);
          ev.target.style.backgroundColor = this.pixelColor;
        });

        // Doubleclick reset the cell its default color.
        gridCellElement.addEventListener("dblclick", (ev) => {
          ev.target.style.backgroundColor = "grey";
        });

        gridLineElement.appendChild(gridCellElement);
      }
    }
  },

  init: function () {
    // Default board is 8 x 8 and 40px pixelSize
    this.gridBuilder(8, 40);
    this.handleValidateClick();
    this.handlePaletteClick();
  },
};

game.init();
