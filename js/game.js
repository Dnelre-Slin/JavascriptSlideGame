const initPieces = [
    {"type": "BigPiece", "x": 0, "y": 1, "width": 2, "height": 2},
    {"type": "LongPiece", "x": 2, "y": 0, "width": 2, "height": 1},
    {"type": "LongPiece", "x": 2, "y": 1, "width": 1, "height": 2},
    {"type": "LongPiece", "x": 3, "y": 1, "width": 1, "height": 2},
    {"type": "LongPiece", "x": 0, "y": 3, "width": 1, "height": 2},
    {"type": "LongPiece", "x": 3, "y": 3, "width": 1, "height": 2},
    {"type": "SmallPiece", "x": 1, "y": 3, "width": 1, "height": 1},
    {"type": "SmallPiece", "x": 2, "y": 3, "width": 1, "height": 1},
    {"type": "SmallPiece", "x": 1, "y": 4, "width": 1, "height": 1},
    {"type": "SmallPiece", "x": 2, "y": 4, "width": 1, "height": 1},
]

class Game {
    constructor() {
        this.name = "BoardGame";
        this.pieces = [];
        this.margin = 30;
        this.gameBoardDiv = document.getElementById("gameBoard");
        this.gameBoardDiv.style = "margin: " + this.margin + "px;";

        this.createBoard();
    }

    createBoard() {
        for (let i = 0; i < initPieces.length; i++) {
            let p = initPieces[i];
            this.pieces[i] = new Piece(this.gameBoardDiv, i, this.margin, p.type, p.x, p.y, p.width, p.height);
        }
    }

    test(pieceId) {
        console.log(pieceId);
        this.setColor(pieceId);
    }

    setColor(pieceId) {
        document.getElementById('p'+pieceId).style.borderColor = "White";
    }
}