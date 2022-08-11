class Board {
    constructor(boardWidth, boardHeight, initPieces) {
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;

        this.squares = [];
        this.pieceLocations = [];

        for (let i = 0; i < (boardWidth * boardHeight); i++) {
            this.squares[i] = null; // Create fill list of squares, with init null value
        }
        
        this.initPieceSquarePlacement(initPieces);
        console.log(this.squares);
    }

    initPieceSquarePlacement(initPieces) {
        for (let i = 0; i < initPieces.length; i++) {
            let p = initPieces[i];
            this.pieceLocations[i] = {"x": p.x, "y": p.y, "w": p.width, "h": p.height}
            const squareList = this.pieceLocationToSquareList(this.pieceLocations[i]);
            for (let s = 0; s < squareList.length; s++) {
                this.squares[squareList[s]] = i;
            }
        }
    }

    squareCoordToIndex(squareCoord) {
        return squareCoord[1] * this.boardWidth + squareCoord[0];
    }

    pieceLocationToSquareList(pieceLocation) {
        let squareList = [];
        let i = 0;
        for (let w = 0; w < pieceLocation.w; w++) {
            for (let h = 0; h < pieceLocation.h; h++) {
                const squareCoord = [pieceLocation.x + w, pieceLocation.y + h];
                const squareIndex = this.squareCoordToIndex(squareCoord);
                squareList[i] = squareIndex;
                i++;
            }
        }
        // console.log(squareList);
        return squareList;
    }

    moveDown(pieceId) {
        const pieceLocation = this.pieceLocations[pieceId];

    }
}