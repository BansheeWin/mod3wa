class Slate {
    constructor(pen) {
        this.canvas = document.getElementById('slate');
        this.context = this.canvas.getContext('2d');
        this.currentLocation = null;
        this.pen = pen;
        this.isDrawing = false;
        this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));
        this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
    }
    onMouseDown(event) {
        this.isDrawing = true;
        this.currentLocation = this.getMouseLocation(event);
    }
    onMouseUp(event) {
        this.isDrawing = false;
    }
    showCoord(event) {
        var x = this.getMouseLocation(event).x;
        var y = this.getMouseLocation(event).y;
        $('#coords').html("<p>X : " + x + " Y : " + y + "</p>");
    }
    getMouseLocation(event) {
        var location;
        var rectangle;
        // Récupération des coordonnées de l'ardoise.
        rectangle = this.canvas.getBoundingClientRect();
        // Création d'un objet contenant les coordonnées X,Y de la souris relative à l'ardoise.
        location = {
            x: event.offsetX
            , y: event.offsetY
        };
        return location;
    }
    onMouseMove(event) {
        this.showCoord(event);
        var location;
        var ctx = this.context;
        // Récupération de la position actuelle de la souris.
        location = this.getMouseLocation(event);
        // Est-ce qu'on peut dessiner sur l'adoise ?
        if (this.isDrawing == true) {
            switch (this.pen.shape) {
            case 'pen':
                // Début du dessin.
                this.pen.configure(ctx);
                ctx.beginPath();
                // Dessine un trait entre les précédentes coordonnées de la souris et les nouvelles.
                ctx.moveTo(this.currentLocation.x, this.currentLocation.y);
                ctx.lineTo(location.x, location.y);
                ctx.lineJoin = this.context.lineCap = 'round';
                // Fin du dessin.
                ctx.closePath();
                // Applique les changements dans le canvas.
                ctx.stroke();
                // Enregistrement de la nouvelle position de la souris.
                this.currentLocation = location;
                break;
            case 'square':
                // Début du dessin.
                this.pen.configure(ctx);
                ctx.beginPath();
                // Dessine un trait entre les précédentes coordonnées de la souris et les nouvelles.
                ctx.moveTo(this.currentLocation.x, this.currentLocation.y);
                ctx.strokeRect(location.x, location.y, this.currentLocation.x, this.currentLocation.y);
                ctx.lineJoin = this.context.lineCap = 'round';
                // Fin du dessin.
                ctx.closePath();
                // Applique les changements dans le canvas.
                ctx.stroke();
                // Enregistrement de la nouvelle position de la souris.
                this.currentLocation = location;
                break;
            }
        }
    }
    onMouseLeave(event) {
        this.isDrawing=false;
        $('#coords').html("<p>X : " + 0 + " Y : " + 0 + "</p>");
    }
}