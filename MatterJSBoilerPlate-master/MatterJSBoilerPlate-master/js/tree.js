class Tree{
    constructor(x,y){
    
    this.x=x
    this.y=y
    this.treeWidth=450;
    this.treeHeight=600;
    this.treeThickness=10;
    this.image=loadImage("images/tree.png")
    this.leftBody=Bodies.rectangle(0,this.y-this.treeHeight/2,this.treeThickness,this.treeHeight,{isStatic:false})
    this.bottomBody=Bodies.rectangle(this.x,this.y,this.treeWidth,this.treeThickness,{isStatic:true})
    this.rightBody=Bodies.rectangle(this.x+this.treeWidth/2,this.y-this.treeHeight/2,this.treeThickness,this.treeHeight,{isStatic:false})

    World.add(world,this.leftBody)
    World.add(world,this.bottomBody)
    World.add(world,this.rightBody)
  }
  display(){
      var treePos=this.bottomBody.position;
      push();
      translate(treePos.x,treePos.y)
      rectMode(CENTER);
      fill(128,128);
      image(this.image,0,-this.treeHeight/2,this.treeWidth,this.treeHeight)
      pop();
  }
}