console.log("Works");
var game = new Game();

function hIdToNId(hId) {
    return hId.slice(1);
}

window.addEventListener('keyup', function(event) {
    if (event.key === "ArrowUp") {
      game.moveUp();
    }
    else if (event.key === "ArrowDown") {
      game.moveDown();
    }
    else if (event.key === "ArrowLeft") {
      game.moveLeft();
    }
    else if (event.key === "ArrowRight") {
      game.moveRight();
    }
  });