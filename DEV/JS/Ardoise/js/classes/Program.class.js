'use strict';
class Program {
    constructor(pen, colorPalette, slate) {
        this.pen = new Pen();
        this.colorPalette = new ColorPalette();
        this.slate = new Slate(this.pen);
    }
    onPickColor() {
        
        var color;
        // Récupération de la couleur sur laquelle l'utilisateur a cliqué.
        color = this.colorPalette.getPickedColor();
        // Changement de la couleur du crayon.
        this.pen.setColorAsRgb(color.red, color.green, color.blue);
        $('#color-palette').fadeOut('slow');
    };
    
    start(){
        $(document).on('magical-slate:pick-color', this.onPickColor.bind(this));
    }
}