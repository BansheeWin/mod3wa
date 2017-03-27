'use strict';
class Program {
    constructor(pen,colorPalette,slate){
        this.pen=new Pen();
        this.colorPalette=new ColorPalette();
        this.slate= new Slate(this.pen);
    }
}
