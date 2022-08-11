class Piece {
    constructor(gameBoardDiv, i, margin, type, x, y, width, height, boardWidth = 4, pieceSize = 50) {
        this.gameBoardDiv = gameBoardDiv;
        this.i = i;
        this.margin = margin;
        this.type = type;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.boardWidth = boardWidth;
        this.pieceSize = pieceSize;

        this.pieceDiv = document.createElement("div");
        this.pieceDiv.id = "p" + this.i;
        this.pieceDiv.className = this.type + " piece p" + this.i;
        // this.pieceDiv.onclick = "pieceClicked(" + i + ")";
        this.pieceDiv.onclick = () => pieceClicked(this.i);
        // let y = Math.floor(i/boardWidth);
        // let x = i%boardWidth;
        this.pieceDiv.style.cssText += "width: " + (this.width * this.pieceSize - 2) + "px; "; 
        this.pieceDiv.style.cssText += "height: " + (this.height * this.pieceSize - 2) + "px;";
        console.log(this.pieceDiv.style.toString());
        this.gameBoardDiv.appendChild(this.pieceDiv);

        this.updateDivPos();
    }

    updateDivPos() {
        this.pieceDiv.style.cssText += "left: " + (this.x * this.pieceSize + this.margin) + "px;"; 
        this.pieceDiv.style.cssText += "top: " + (this.y * this.pieceSize + this.margin) + "px;";
    }
}