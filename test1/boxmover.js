class BoxMover {
    constructor() {
        this.element = null;
        this.startLeft = 0;
        this.startTop = 0;
        this.deltaLeft = 0;
        this.deltaTop = 0;
        this.divSize = 50;
        this.halfDivSize = 50 / 2;
    }

    setElement(newElement) {
        this.element = newElement;
        this.startLeft = this.element.style.left === "" ? 0 : parseInt(this.element.style.left.slice(0, -2));
        this.startTop = this.element.style.top === "" ? 0 : parseInt(this.element.style.top.slice(0, -2));
        this.deltaLeft = 0;
        this.deltaTop = 0;
    }

    mouseDown(element) {
        this.setElement(element);
    }

    mouseUp(event) {
        if (this.element !== null) {
            this.snapToNearesGrid();
            this.element = null;
        }
    }

    mouseMove(event) {
        if (this.element !== null) {
            this.deltaLeft += event.movementX;
            this.deltaTop += event.movementY;
            if (Math.abs(this.deltaLeft) > Math.abs(this.deltaTop)) {
                this.element.style.left = (this.startLeft + this.deltaLeft) + "px";
                this.element.style.top = (this.startTop) + "px";
                this.checkPos(this.deltaLeft, 0);
            } else {
                this.element.style.left = (this.startLeft) + "px";
                this.element.style.top = (this.startTop + this.deltaTop) + "px";
                this.checkPos(0, this.deltaTop);
            }
        }
    }

    findNearest(number, start, end) {
        if(Math.abs(number - start) < Math.abs(number- end)) {
            return start;
        } else {
            return end;
        }
    }

    snapToNearesGrid() {
        if (Math.abs(this.deltaLeft) > Math.abs(this.deltaTop)) {
            this.element.style.left = this.findNearest(this.deltaLeft, this.startLeft, this.startLeft + this.divSize) + "px";
        } else {
            this.element.style.top = this.findNearest(this.deltaTop, this.startTop, this.startTop + this.divSize) + "px";
        }
    }

    checkPos(left, top) {
        if (this.element !== null) {
            if (left > this.halfDivSize) {
                this.resetPos(this.startLeft + this.divSize, this.startTop, this.deltaLeft - this.divSize, this.deltaTop);
            }
            else if (left < -this.halfDivSize) {
                this.resetPos(this.startLeft - this.divSize, this.startTop, this.deltaLeft + this.divSize, this.deltaTop);
            }
            if (top > this.halfDivSize) {
                this.resetPos(this.startLeft, this.startTop + this.divSize, this.deltaLeft, this.deltaTop - this.divSize);
            }
            else if (top < -this.halfDivSize) {
                this.resetPos(this.startLeft, this.startTop - this.divSize, this.deltaLeft, this.deltaTop + this.divSize);
            }
        }
    }
    
    resetPos(left, top, deltaLeft, deltaTop) {
        if (this.element !== null) {
            this.startLeft = left;
            this.startTop = top;
            this.deltaLeft = deltaLeft;
            this.deltaTop = deltaTop;
            console.log(this.startLeft + "  " + this.startTop);
        }
    }
}