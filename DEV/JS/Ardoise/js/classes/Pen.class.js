class Pen {
    constructor(size, color, shape) {
        this.size = 2;
        this.color = "black";
        this.shape = "pen";
    }
    setSize(size) {
        this.size = size;
    }
    setColor(color) {
        this.color = color;
    }
    setShape(shape) {
        this.shape = shape;
    }
    configure(ctx, x, y) {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size;
    }
    setColorAsRgb(red, green, blue) {
        // Stockage de la couleur au format RGB (comme la fonction CSS)
        this.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    };
}