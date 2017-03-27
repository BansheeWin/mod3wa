class Slate {
    constructor(pen) {
        this.canvas = document.getElementById('slate');
        this.context = this.canvas.getContext('2d');
        this.currentLocation = null;
        this.pen = pen;
        this.isDrawing = false;
        this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.canvas.addEventListener('mouseleave', this.onMouseUp.bind(this));
        this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
    }
    onMouseDown(event) {
        this.isDrawing = true;
        this.currentLocation = this.getMouseLocation(event);
        var x = this.currentLocation.x;
        var y = this.currentLocation.y;
    }
    onMouseUp(event) {
        this.currentLocation = this.getMouseLocation(event);
        this.isDrawing = false;
        var x = this.currentLocation.x = 0;
        var y = this.currentLocation.y = 0;
        $('#coords').html("<p>X : " + x + " Y : " + y + "</p>");
    }
    showCoord(event) {
        this.currentLocation = this.getMouseLocation(event);
        var x = this.currentLocation.x;
        var y = this.currentLocation.y;
        $('#coords').html("<p>X : " + x + " Y : " + y + "</p>");
    }
    onMouseMove(event) {
        this.showCoord(event);
        if (this.isDrawing == true) {
            this.pen.configure(this.context);
            this.currentLocation = this.getMouseLocation(event);
        var x = this.currentLocation.x;
        var y = this.currentLocation.y;
        var ctx = this.context;
            ctx.fillStyle=this.pen.color;
            ctx.fillRect(x,y,this.pen.size,this.pen.size);
        }
    }
    getMouseLocation(event) {
        var location;
        var rectangle;
        rectangle = this.canvas.getBoundingClientRect();
        location = {
            x: event.offsetX
            , y: event.offsetY
        };
        return location;
    }
}