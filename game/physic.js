function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(-rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    xE = Math.floor(ennemy1.position.x)
    yE = Math.floor(ennemy1.position.y)
    xP = Math.floor(player1.position.x)
    yP = Math.floor(player1.position.y)
    console.log("Ennemy  " + xE + " : " + yE)
    console.log("Player  " + xP + " : " + yP)
    if (xE == xP && yE == yP)
        player1.dead()

    player1.move();
    controls.update();
}