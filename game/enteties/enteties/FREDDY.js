import { entity } from "../brain.js";

export class freddy extends entity{
    constructor(context){
        super("Freddy", 50, 50, 10, 10, context);
    }


    start(){
        super.start();
    }



    update(){
        this.x += 25;


        super.redraw();
    }
}