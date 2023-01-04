// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius=radius;
    }
    
    get diameter(){
        return this.radius * 2
    }
    set diameter(newDiameter){
        this.radius = newDiameter/2;
    }
    
    get circumference(){
        return 3.14 * this.diameter
    }    
    set circumference(newCircumference){
        this.radius = newCircumference/(Math.PI*2)
    }

    get area(){
        return Math.PI * this.radius * this.radius
    }
    set area(newArea){
        this.radius = Math.sqrt(newArea/Math.PI)
    }
        
}

let circle = new Circle(6);
console.log(circle.diameter);
console.log(circle.circumference);
console.log(circle.area);

circle.diameter = 36;
console.log(circle.radius);

circle.circumference = 100;
console.log(circle.radius);

circle.area = 200;
console.log(circle.radius);