let currentDiv = null;
let leftValue = 0;
let topValue = 0;

function mouseDownEvent(element) {
    // console.log(element);
    console.log("Mouse down");
    currentDiv = element;
}

window.addEventListener("mouseup", function(event) {
    if (currentDiv !== null) {
        currentDiv = null;
        console.log("Mouse up");
    }
});

window.addEventListener("mousemove", function(event) {
    if (currentDiv !== null) {
        console.log(event.movementX + " " + event.movementY);
        leftValue += event.movementX;
        topValue += event.movementY;
        currentDiv.style['left'] = leftValue + "px";
        currentDiv.style['top'] = topValue + "px";
        console.log(currentDiv.style.left);
    }
});