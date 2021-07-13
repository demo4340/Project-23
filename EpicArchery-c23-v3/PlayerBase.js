class PlayerBase {

    constructor(x, y, width, height){

        var playerBaseOptions = {

            isStatic : true

        };

        this.body = Bodies.rectangle(x, y, width, height, playerBaseOptions);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/base1.png");
        World.add(world, this.body);

    }

    display(){

        var playerBasePos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate (playerBasePos.x, playerBasePos.y);
        rotate (angle);
        imageMode (CENTER);
        image (this.image, 0, 0, this.width, this.height);
        pop ();

    }

}