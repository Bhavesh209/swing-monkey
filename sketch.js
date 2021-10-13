const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var circle1;
var monkey1,monkey2;

function preload() {
    bg = loadImage("sprites/background.jpg");
    monkey1 = loadImage("")
}

function setup() {
    createCanvas(1000, 500)
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    circle1 = new Circle(534, 127, 50, 100);
    rope = new Rope(circle1.body, { x: 450, y: 350 });

    monkey = new Monkey(500, 400, 60, 70);
}

function draw() {
    background(bg);
    text(mouseX + "," + mouseY, mouseX, mouseY)
    monkey.display();
    rope.display();
    circle1.display();

    

//     let display = touches.length + ' touches';
// text(display, 5, 10);

// if((touches.length > 0 || keyDown("space"))) {
//     rope.strokeWeight(3)
// }
    
}

function keyPressed() {
    if(keyCode===32) {
        
    }
}