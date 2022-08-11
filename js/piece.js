class Piece {
    constructor(game, gameBoardDiv, board, i, margin, type, x, y, width, height, borderWidth = 4, pieceSize = 50) {
        this.game = game;
        this.gameBoardDiv = gameBoardDiv;
        this.i = i;
        this.margin = margin;
        this.type = type;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.borderWidth = borderWidth;
        this.pieceSize = pieceSize;
        
        this.createDiv();
        this.updateDivPos();
    }
    
    createDiv() {
        this.pieceDiv = document.createElement("div");
        this.pieceDiv.id = "p" + this.i;
        this.pieceDiv.className = this.type + " piece p" + this.i;
        this.pieceDiv.onclick = () => this.game.pieceClicked(this.i);
        this.pieceDiv.style.cssText += "width: " + (this.width * this.pieceSize - this.borderWidth) + "px; "; 
        this.pieceDiv.style.cssText += "height: " + (this.height * this.pieceSize - this.borderWidth) + "px;";
        this.gameBoardDiv.appendChild(this.pieceDiv);
    }

    updateDivPos() {
        this.pieceDiv.style.cssText += "left: " + (this.x * this.pieceSize + this.margin) + "px;"; 
        this.pieceDiv.style.cssText += "top: " + (this.y * this.pieceSize + this.margin) + "px;";
    }

    pieceSelected() {
        // directions = {
        //     "top": {"x": 0, "y": -1},
        //     "bottom": {"x": 0, "y": 1},
        //     "left": {"x": -1, "y": 0},
        //     "right": {"x": 1, "y": 0}
        // }
        // for (const [key, value] of Object.entries(directions)) {
        //     for (let w = 0; w < this.width; w++)
        //     {
        //         for (let h = 0; h < this.height; h++) {
        //             const pos = [value.x + w, value.y + h];
        //         }
        //     }
        // }
        this.pieceDiv.style.borderColor = "Green";
    }
}