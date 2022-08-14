let currentDiv = null;
let leftValue = 50;
let topValue = 50;

const testBox = document.getElementById("testBox");
testBox.style.left = leftValue + "px";
testBox.style.top = topValue + "px";

const boxMover = new BoxMover();

function mouseDownEvent(element) {
    boxMover.mouseDown(element);
    // // console.log(element);
    // console.log("Mouse down");
    // currentDiv = element;
    // boxMover.setElement(element);
}

window.addEventListener("mouseup", function(event) {
    boxMover.mouseUp(event);
    // if (currentDiv !== null) {
        //     currentDiv = null;
        //     console.log("Mouse up");
        // }
});
    
window.addEventListener("mousemove", function(event) {
    boxMover.mouseMove(event);
    // if (currentDiv !== null) {
        //     console.log(event.movementX + " " + event.movementY);
        //     leftValue += event.movementX;
        //     topValue += event.movementY;
        //     currentDiv.style.left = leftValue + "px";
        //     currentDiv.style.top = topValue + "px";
        //     console.log(currentDiv.style.left);
        // }
});