class BlueBox extends Box{
    constructor(x,y){
        super(x,y,20,30)
    }
    display(){
        
        super.display();
        fill("blue");
    }
}