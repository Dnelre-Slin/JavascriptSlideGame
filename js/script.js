console.log("Works");
var game = new Game();

function hIdToNId(hId) {
    return hId.slice(1);
}

function pieceClicked(pieceId) {
    console.log(pieceId);
    game.test(pieceId);
}