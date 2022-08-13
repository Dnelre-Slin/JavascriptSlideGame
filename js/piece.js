class Piece {
    constructor(game, gameBoardDiv, board, i, margin, type, x, y, width, height, borderWidth = 4, pieceSize = 50) {
        this.game = game;
        this.gameBoardDiv = gameBoardDiv;
        this.board = board;
        this.i = i;
        this.margin = margin;
        this.type = type;
        // this.x = x;
        // this.y = y;
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
        this.pieceDiv.onmousedown = () => this.game.pieceMouseDown(this.i);
        this.pieceDiv.style.cssText += "width: " + (this.width * this.pieceSize - this.borderWidth) + "px; "; 
        this.pieceDiv.style.cssText += "height: " + (this.height * this.pieceSize - this.borderWidth) + "px;";
        this.gameBoardDiv.appendChild(this.pieceDiv);
    }

    updateDivPos() {
        const pieceLocation = this.board.getPieceLocation(this.i);
        this.pieceDiv.style.cssText += "left: " + (pieceLocation.x * this.pieceSize + this.margin) + "px;"; 
        this.pieceDiv.style.cssText += "top: " + (pieceLocation.y * this.pieceSize + this.margin) + "px;";
    }

    updateBorderColors(availableDirections = null) {
        // Set to black if no availableDirections are sent in
        if (availableDirections === null) {
            this.pieceDiv.style["border-color"] = "Black";
        } else {
            for (const [key, value] of Object.entries(availableDirections)) {
                // const s = "border-" + key + "-color: " + (value?"Green":"Red") + ";";
                const s = "border-" + key + "-color"
                const v = (value?"Green":"Red");
                console.log(s);
                this.pieceDiv.style[s] = v;
            }
        }
    }

    pieceSelected() {
        const availableDirections = this.board.checkPieceNeighbors(this.i);
        console.log(availableDirections);

        this.updateBorderColors(availableDirections);
    }

    pieceUnselected() {
        this.updateBorderColors(null);
    }
}