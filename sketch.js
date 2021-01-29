var g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g12,g11
var cap
var a,b,c,d,e
var obg
var i=1
var x,y,z,f,q,w

function preload(){
    d=loadImage('img/g1.png')
    c=loadImage('img/g2.png')
    b=loadImage('img/g3.png')
    a=loadImage('img/g4.png')
    e=loadImage('img/g5.png')
}

function setup(){
    createCanvas(windowWidth,windowHeight)

    obg=new Group()
    g1=createSprite(width/5,height/4,50,50)
    g1.addImage('a',a)
    g1.scale=0.1

    g2=createSprite(width/5*2,height/4,50,50)
    g2.addImage('b',b)
    g2.scale=0.1

    g3=createSprite(width/5*3,height/4,50,50)
    g3.addImage('e',e)
    g3.scale=0.1

    g4=createSprite(width/5*4,height/4,50,50)
    g4.addImage('d',d)
    g4.scale=0.03

    g5=createSprite(width/5,height/2,50,50)
    g5.addImage('f',d)
    g5.scale=0.03

    g6=createSprite(width/5*2,height/2,50,50)
    g6.addImage('g',e)
    g6.scale=0.1

    g7=createSprite(width/5*3,height/2,50,50)
    g7.addImage('x',a)
    g7.scale=0.1

    g8=createSprite(width/5*4,height/2,50,50)
    g8.addImage('dum',b)
    g8.scale=0.1

    g9=createSprite(width/5,height/2+height/4,50,50)
    g9.addImage('f',d)
    g9.scale=0.03

    g10=createSprite(width/5*2,height/2+height/4,50,50)
    g10.addImage('g',e)
    g10.scale=0.1

    g11=createSprite(width/5*3,height/2+height/4,50,50)
    g11.addImage('x',a)
    g11.scale=0.1

    g12=createSprite(width/5*4,height/2+height/4,50,50)
    g12.addImage('dum',b)
    g12.scale=0.1

    obg.add(g1)
    obg.add(g2)
    obg.add(g3)
    obg.add(g4)
    obg.add(g5)
    obg.add(g6)
    obg.add(g7)
    obg.add(g8)
    obg.add(g9)
    obg.add(g10)
    obg.add(g11)
    obg.add(g12)

    cap=createColorPicker('blue')
    cap.position(width/2-cap.width/2,height-height/10)

    x = createInput('Guitar Name: ')
    x.position(width/2-x.width,height/12)

    y = createButton('Submit')
    y.position(width/2+y.width/2,height/12)

    z = createButton('Card')
    z.position(width/4,height/2)

    q = createButton('COD')
    q.position(width/4*2,height/2)

    f = createButton('EMI')
    f.position(width/4*3,height/2)

    z.hide()
    q.hide()
    f.hide()

}

function draw(){
    background(cap.value())

    if(i==1){

    rectMode(CENTER)
    fill('white')
    strokeWeight(4)
    rect(width/5,height/4,width/5,height/4)
    rect(width/5*2,height/4,width/5,height/4)
    rect(width/5*3,height/4,width/5,height/4)
    rect(width/5*4,height/4,width/5,height/4)

    rect(width/5,height/2,width/5,height/4)
    rect(width/5*2,height/2,width/5,height/4)
    rect(width/5*3,height/2,width/5,height/4)
    rect(width/5*4,height/2,width/5,height/4)

    rect(width/5,height/2+height/4,width/5,height/4)
    rect(width/5*2,height/2+height/4,width/5,height/4)
    rect(width/5*3,height/2+height/4,width/5,height/4)
    rect(width/5*4,height/2+height/4,width/5,height/4)
    text('Click to order',width/2-width/30,height/15)

    y.mousePressed(function(){
        i=2
    })

    }

    if(i==2){
       obg.destroyEach()
       cap.hide()
       x.hide()
       y.hide()
       z.show()
       f.show()
       q.show()

       m = 'Method of payment'
       fill('white')
       textSize(40)
       text(m,width/3,height/4)

       z.mousePressed(function(){
           alert('Your Order has been place')
           i=3
           f.hide()
           q.hide()
           z.hide()
       })

       q.mousePressed(function(){
            alert('Your Order has been place')
            i=3
            f.hide()
            q.hide()
            z.hide()
       })

        f.mousePressed(function(){
            alert('Your Order has been place')
            i=3
            f.hide()
            q.hide()
            z.hide()
        })

       drawSprites()

    }

    if(i==3){
        background(0)
        textSize(65)
        text('Thank you for using us',width/2-width/4,height/2)
    }

    drawSprites()
}