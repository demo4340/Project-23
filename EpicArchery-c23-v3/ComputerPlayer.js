class ComputerPlayer {

    constructor(x, y, width, height){

        var computerPlayerOptions = {

            isStatic : true

        };

        this.body = Bodies.rectangle(x, y, width, height, computerPlayerOptions);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/player.png");
        World.add(world, this.body);

    }

    display(){

        var computerPlayerPos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate (computerPlayerPos.x, computerPlayerPos.y);
        rotate (angle);
        imageMode (CENTER);
        image (this.image, 0, 0, this.width, this.height);
        pop ();

    }

}