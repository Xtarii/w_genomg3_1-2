export class entity{
    constructor(name = String, width = Number, heigth = Number, x = Number, y = Number, context){
        this.name = name;
        this.width = width;
        this.heigth = heigth;
        this.context = context;
        
        this.x = x;
        this.y = y;
    }



    start(){
        this.entity = this.context.fillRect(this.x, this.y, this.width, this.heigth);
    }



    redraw(){
        this.entity = this.context.fillRect(this.x, this.y, this.width, this.heigth);;
    }
}