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
        // console.log(this.squares);
    }

    initPieceSquarePlacement(initPieces) {
        for (let i = 0; i < initPieces.length; i++) {
            let p = initPieces[i];
            const pieceLocation = {"x": p.x, "y": p.y, "w": p.width, "h": p.height}
            this.setPiecePlacement(i, pieceLocation);
            // const squareList = this.pieceLocationToSquareList(this.pieceLocations[i]);
            // for (let s = 0; s < squareList.length; s++) {
            //     this.squares[squareList[s]] = i;
            // }
        }
    }

    setPiecePlacement(pieceId, newLocation) {
        // Null-out old squares, if old position is sat
        const oldLocation = this.pieceLocations[pieceId];
        if (oldLocation !== undefined) {
            const oldSquareList = this.pieceLocationToSquareList(oldLocation);
            for (let s = 0; s < oldSquareList.length; s++) {
                this.squares[oldSquareList[s]] = null;
            }
        }

        this.pieceLocations[pieceId] = newLocation;
        const squareList = this.pieceLocationToSquareList(newLocation);
        for (let s = 0; s < squareList.length; s++) {
            this.squares[squareList[s]] = pieceId;
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

    getPieceLocation(pieceId) {
        return this.pieceLocations[pieceId];
    }

    checkLocationAvailability(pieceId, newLocation) {
        const newSquares = this.pieceLocationToSquareList(newLocation);
        for (let i = 0; i < newSquares.length; i++) {
            const s = newSquares[i];
            if (this.squares[s] !== null && this.squares[s] !== pieceId) {
                return false; // Not available
            }
        }
        return true; // Available if all squares are null or the piece in question
    }

    checkPieceNeighbors(pieceId) {
        const dirs = ["top", "bottom", "left", "right"];
        const directions = {
            "top": [0, -1], // Up
            "bottom": [0, 1], // Down
            "left": [-1, 0], // Left
            "right": [1, 0] // Right
        };
        let availableDirections = {};
        const pieceLocation = this.pieceLocations[pieceId];
        for (let i = 0; i < dirs.length; i++) {
            const d = directions[dirs[i]];
            const newLocation = {"x": pieceLocation.x + d[0], "y": pieceLocation.y + d[1], "w": pieceLocation.w, "h": pieceLocation.h}
            availableDirections[dirs[i]] = this.checkLocationAvailability(pieceId, newLocation);
        }
        return availableDirections;
    }

    moveUp(pieceId) {
        const pieceLocation = this.pieceLocations[pieceId];
        const newLocation = {"x": pieceLocation.x, "y": pieceLocation.y - 1, "w": pieceLocation.w, "h": pieceLocation.h} // Increase y by 1, to move 1 down
        const available = this.checkLocationAvailability(pieceId, newLocation);
        if (available) {
            console.log("Move up");
            this.setPiecePlacement(pieceId, newLocation);
        }
    }

    moveDown(pieceId) {
        const pieceLocation = this.pieceLocations[pieceId];
        const newLocation = {"x": pieceLocation.x, "y": pieceLocation.y + 1, "w": pieceLocation.w, "h": pieceLocation.h} // Increase y by 1, to move 1 down
        const available = this.checkLocationAvailability(pieceId, newLocation);

        if (available) {
            this.setPiecePlacement(pieceId, newLocation);
        }
    }
}