class ComputerBase {

    constructor(x, y, width, height){

        var computerBaseOptions = {

            isStatic : true

        };

        this.body = Bodies.rectangle(x, y, width, height, computerBaseOptions);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/base2.png");
        World.add(world, this.body);

    }

    display(){

        var computerBasePos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate (computerBasePos.x, computerBasePos.y);
        rotate (angle);
        imageMode (CENTER);
        image (this.image, 0, 0, this.width, this.height);
        pop ();

    }

}