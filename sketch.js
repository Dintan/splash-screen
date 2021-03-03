    x = 100
    y = 100
    angulo = 0;

    function setup() {
        createCanvas(windowWidth, windowHeight);
        colorfondo = color(255, 181, 0, 10);
        colorBola = color(255, 0, 0);
        noStroke();
    }

    function draw() {
        background(colorfondo);
        // if ( keyIsPressed == true ) {
        //   //colorfondo = random(0, 255)
        //   x += 2;
        //   angulo += 0.4;
        // }

        if (keyIsDown(LEFT_ARROW)) {
            x -= 2;
            angulo -= 0.4;
        }

        if (keyIsDown(RIGHT_ARROW)) {
            x += 2;
            angulo += 0.4;
        }

        if (keyIsDown(UP_ARROW)) {
            y -= 2;
            angulo -= 0.4;
        }

        if (keyIsDown(DOWN_ARROW)) {
            y += 2;
            angulo += 0.4;
        }

        fill(colorBola)

        push()
        translate(x, y)
        rotate(angulo)
        arc(0, 0, 30, 30, 0, PI)
        pop()
    }

    function keyPressed() {
        //colorfondo = random(0, 255)
        colorBola = color(0, 0, 0);
    }

    function keyReleased() {
        //colorfondo = 255;
        colorBola = color(255, 0, 0);
    }

    function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
        x = width / 2
        y = height / 2
    }