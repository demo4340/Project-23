class Player {

    constructor(x, y, width, height){

        var playerOptions = {

            isStatic : true

        };

        this.body = Bodies.rectangle(x, y, width, height, playerOptions);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/player.png");
        World.add(world, this.body);

    }

    display(){

        var playerPos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate (playerPos.x, playerPos.y);
        rotate (angle);
        imageMode (CENTER);
        image (this.image, 0, 0, this.width, this.height);
        pop ();

    }

}