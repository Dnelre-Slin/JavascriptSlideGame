class Game {
    constructor(initPieces = predefInitPieces) {
        this.name = "BoardGame";
        this.pieces = [];
        this.margin = 30;
        this.gameBoardDiv = document.getElementById("gameBoard");
        this.gameBoardDiv.style = "margin: " + this.margin + "px;";

        this.selectedPiece = null;

        this.board = new Board(predefBoardWidth, predefBoardHeight, predefInitPieces);

        this.createPieces(initPieces);
    }

    createPieces(initPieces) {
        for (let i = 0; i < initPieces.length; i++) {
            let p = initPieces[i];
            this.pieces[i] = new Piece(this, this.gameBoardDiv, this.board, i, this.margin, p.type, p.x, p.y, p.width, p.height);
        }
    }
    
    pieceClicked(pieceId) {
        console.log(pieceId);
        game.selectPiece(pieceId);
    }

    selectPiece(pieceId) {
        if (this.selectedPiece !== null) {
            this.selectedPiece.pieceUnselected();
        }
        this.selectedPiece = this.pieces[pieceId];
        this.selectedPiece.pieceSelected();
        // this.setColor(pieceId);
    }
    
    // setColor(pieceId) {
        //     document.getElementById('p'+pieceId).style.borderColor = "Green";
        // }
        
        moveDown() {
            if (this.selectedPiece !== null) {
                this.board.moveDown(this.selectedPiece.i);
                this.selectedPiece.updateDivPos();
                this.selectedPiece.pieceSelected();
            }
        }
        
        moveUp() {
            if (this.selectedPiece !== null) {
                this.board.moveUp(this.selectedPiece.i);
                this.selectedPiece.updateDivPos();
                this.selectedPiece.pieceSelected();
        }
    }

    moveLeft() {
        if (this.selectedPiece !== null) {
            // this.board.moveLeft(this.selectedPiece.i);
        }
    }

    moveRight() {
        if (this.selectedPiece !== null) {
            // this.board.moveRight(this.selectedPiece.i);
        }
    }
}