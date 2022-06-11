var hero = {x: 270,y: 500,hp: 5}
var enemies = [{x:50, y: 100},{x:150, y:50}, {x:250, y:150}, {x:300, y:50}, {x:200, y:100},{x:500, y:150},{x:350, y:50}];
var enemies1 =[{x:100, y: 570, hp:0, visibility: ''},{x:400, y:570, hp:0, visibility: ''}];
var bullets = [];
var enemyBullets = [];
var explosionArray = [];
var explosionSound = new Audio('explosion.mp3');
var background = -8854;
var enemyTiming = 0;
var bulletInterval = 0;
var deployEnemy2 = false;
var score = 0;
var keys = {
    right: false,
    left: false,
    up: false,
    down: false,
    fire: false
    };
function displayHero(){
    document.getElementById('hero').style['top'] = hero.y + "px";
    document.getElementById('hero').style['left'] = hero.x + "px";
}
function displayEnemies(){
    var output = '';
    for(var i=0; i<enemies.length; i++){
        output += "<div class='enemy1' style='top:"+enemies[i].y+"px; left:"+enemies[i].x+"px;'></div>";
    }
    for(var i=0; i<enemies1.length; i++){
        output += "<div class='enemy2' style='top:"+enemies1[i].y+"px; left:"+enemies1[i].x+"px; visibility:"+enemies1[i].visibility+";'></div>";
    }
    document.getElementById('enemies').innerHTML = output;
}

function moveBackground(){
    background+=2;
    if(background >= -500){
        background = -8854
    }
    document.getElementById('container').style['background-position'] = 0 + "px " + background +"px";
}
function moveEnemies(){
    for(var i=0; i<enemies.length; i++){
        enemies[i].y += 5;
        if(enemies[i].y > 590){
            enemies[i].y = 0;
            enemies[i].x = Math.random()*500;
        }
    }
    let startPos  = true;
    for(var i=0; i<enemies1.length; i++){
        if(enemies1[i].y == 570){
            startPos = true;
            deployEnemy2 = false;
        }
        else{
            startPos = false;
            break;
        }
    }
    if(startPos){
        enemyTiming = 0;
        for(var i=0; i<enemies1.length; i++){
            enemies1[i].hp = 5;
            enemies1[i].y -= 2;
        }
    }
    if(enemyTiming > 100){
        deployEnemy2 = true;
    }
    if(deployEnemy2){
        for(var i=0; i<enemies1.length; i++){
            if(enemies1[i].hp > 0){
                enemies1[i].y -= 2;
            }
            if(enemies1[i].y < 5){
                enemies1[i].y = 570;
                enemies1[i].x = Math.random()*500;
            }
        }
    }
}
function appear(){
    for(var i=0; i<enemies1.length; i++){
        if(enemies1[i].hp>0 && enemies1[i].y<568){
            enemies1[i].visibility = 'visible';
        }
        else{
            enemies1[i].visibility = 'hidden';
        }
    }
}
function enemyFire(){
    if(deployEnemy2){
        for(var i=0; i<enemies1.length; i++){
            enemyBullets.push({x: enemies1[i].x+16, y: enemies1[i].y+20, z:1});
            enemyBullets.push({x: enemies1[i].x+16, y: enemies1[i].y+20, z:2});
            enemyBullets.push({x: enemies1[i].x+16, y: enemies1[i].y+20, z:3});
        }
    }
}
function moveBullets(){
    for(var i=0; i<bullets.length; i++){
        bullets[i].y -= 10;
        
        if(bullets[i].y<0){
            bullets[i] = bullets[bullets.length-1];
            bullets.pop();
        }
    }
}
function moveEnemyBullets(){
    for(var i=0; i<enemyBullets.length; i++){
        if(enemyBullets[i].z==1){
            enemyBullets[i].y += 4;
            enemyBullets[i].x -= 4;
        }
        else if(enemyBullets[i].z==2){
            enemyBullets[i].y += 4;
        }
        else if(enemyBullets[i].z==3){
            enemyBullets[i].y += 4;
            enemyBullets[i].x += 4;
        }
        if(enemyBullets[i].y>590 || enemyBullets[i].x<5 || enemyBullets[i].x>550){
            enemyBullets[i] = enemyBullets[enemyBullets.length-1];
            enemyBullets.pop();
        }
    }
}
function displayBullets(){
    var output = '';
    for(var i=0; i<bullets.length; i++){
        output += "<div class='bullet' style='top:"+bullets[i].y+"px; left:"+bullets[i].x+"px;'></div>"
    }
    document.getElementById('bullets').innerHTML = output;
}
function displayEnemyBullets(){
    var output = '';
    for(var i=0; i<enemyBullets.length; i++){
        output += "<div class='enemyBullet' style='top:"+enemyBullets[i].y+"px; left:"+enemyBullets[i].x+"px;'></div>"
    }
    document.getElementById('enemyBullets').innerHTML = output;
}
function displayScore(){
    if(score<0){
        score = 0;
    }
    document.getElementById('score').innerHTML = "Score: " + score;
    document.getElementById('heroHP').innerHTML = "HP: " + hero.hp;
}
function enemiesCollision1(){
    var output = '';
    for(var i=0; i<bullets.length; i++){
        for(var j=0; j<enemies.length; j++){
            if(Math.abs(bullets[i].x - enemies[j].x) < 20 && Math.abs(bullets[i].y - enemies[j].y) < 20){
                explosionSound.play();
                explosionArray.push({x: enemies[j].x, y: enemies[j].y});
                displayExplosion();
                bullets[i] = bullets[bullets.length-1];
                bullets.pop();
                enemies[j].y=0
                enemies[j].x=Math.random()*500;
                score += 10;
                if(bullets[i] == undefined){
                    break;
                }
            }
        }
    }
}
function enemiesCollision2(){
    var output = '';
    for(var i=0; i<bullets.length; i++){
        for(var j=0; j<enemies1.length; j++){
            if(Math.abs(bullets[i].x - enemies1[j].x) < 40 && Math.abs(bullets[i].y - enemies1[j].y) < 20){
                explosionSound.play();
                explosionArray.push({x: bullets[i].x, y: bullets[i].y});
                displayExplosion();
                bullets[i] = bullets[bullets.length-1];
                bullets.pop();
                enemies1[j].hp--;
                if(enemies1[j].hp == 0){
                    enemies1[j].y=570;
                    enemies1[j].x=Math.random()*500;
                    score += 100;
                }
                if(bullets[i] == undefined){
                    break;
                }
            }
        }
    }
}
function heroCollision(){
    var output = '';
    for(var i=0; i<enemies.length; i++){
        if(Math.abs(hero.x - enemies[i].x) < 20 && Math.abs(hero.y - enemies[i].y) < 20){
            explosionSound.play();
            explosionArray.push({x: enemies[i].x, y: enemies[i].y});
            displayExplosion();
            enemies[i].y=0;
            enemies[i].x=Math.random()*500;
            score -= 500;
            hero.hp--;
        }
    }
    for(var i=0; i<enemyBullets.length; i++){
        if(Math.abs(hero.x - enemyBullets[i].x) < 20 && Math.abs(hero.y - enemyBullets[i].y) < 20){
            explosionSound.play();
            explosionArray.push({x: enemyBullets[i].x, y: enemyBullets[i].y});
            displayExplosion();
            enemyBullets[i] = enemyBullets[enemyBullets.length-1];
            enemyBullets.pop();
            score -= 500;
            hero.hp--;
        }
    }
}
function displayExplosion(){
    var output = '';
    for(var i=0; i<explosionArray.length; i++){
        output += "<div class='explosion' style='top:"+explosionArray[i].y+"px; left:"+explosionArray[i].x+"px;'></div>"
    }
    document.getElementById('explode').innerHTML = output;
}
function removeExplosion(){
    for(var i=0; i<explosionArray.length; i++){
        explosionArray[i] = explosionArray[explosionArray.length-1];
        explosionArray.pop();
    }
    displayExplosion();
}
function gameOVer(){
    if(hero.hp <= 0){
        alert("Game Over! Try again.");
        hero.hp = 5;
        location.reload();
    }
}
function keydown(e) {
    if(e.keyCode == 37) {
        keys.left = true;
    }
    else if(e.keyCode == 38) {
        keys.up = true;
    }
    if(e.keyCode == 39) {
        keys.right = true;
    }
    else if(e.keyCode == 40) {
        keys.down = true;
    }
    if(e.keyCode == 32) {
        keys.fire = true;
    }
}
function keyup(e) {
    if(e.keyCode == 37) {
        keys.left = false;
    }
    else if(e.keyCode == 38) {
        keys.up = false;
    }
    if(e.keyCode == 39) {
        keys.right = false;
    }
    else if(e.keyCode == 40) {
        keys.down = false;
    }
    if(e.keyCode == 32) {
        keys.fire = false;
    }
}
function heroControl(){
    if(keys.left && hero.x>10){
        hero.x -=10;
    }
    else if(keys.right && hero.x<530){
        hero.x +=10;
    }
    if(keys.up && hero.y>10){
        hero.y -=10;
    }
    else if(keys.down && hero.y<580){
        hero.y +=10;
    }
    if(keys.fire) {
        if(bulletInterval%5==0){
            bullets.push({x: hero.x+6, y: hero.y-13});
            displayBullets();
        }
    }
}
function gameLoop(){
    heroControl();
    displayHero();
    moveBackground();
    moveEnemies();
    appear();
    displayEnemies();
    moveBullets();
    moveEnemyBullets();
    displayEnemyBullets();
    displayBullets();
    enemiesCollision1();
    enemiesCollision2();
    heroCollision();
    displayScore();
    gameOVer();
    enemyTiming++;
    bulletInterval++;
}
setInterval(removeExplosion, 500);
setInterval(enemyFire, 1000);
setInterval(gameLoop, 50);
document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
