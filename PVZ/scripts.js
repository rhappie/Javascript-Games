var sunDrops = [];
var deployedPlants = [];
var deployedZombies = [];
var peaBullets = [];
var selectedCard;
var suns = 150;
var intensity = 15000;
var end = false

function displaySuns(){
    document.getElementById('suns').innerHTML = suns;
}
function generateSuns(){
    suns += 25
}
function displaySunDrops(){
    var output = '';
    for(var i = 0; i<sunDrops.length;i++){
        output += "<div class='sunDrops' style='left:"+(sunDrops[i].x*80+300)+"px; top:"+(sunDrops[i].y*100+130)+"px;'></div>"
    }
    document.getElementById('sunDrops').innerHTML = output;
}
function generateSunDrops(){
    for(var i = 0; i<deployedPlants.length;i++){
        if(deployedPlants[i].mod == 0){
            deployedPlants[i].energy +=1;
        }
        if(deployedPlants[i].energy >=100){
            sunDrops.push({x: deployedPlants[i].x, y: deployedPlants[i].y});
            deployedPlants[i].energy = 0;
        }
    }
}
function displayPlants(){
    var output = '';
    for(var i = 0; i<deployedPlants.length;i++){
        if(deployedPlants[i].mod == 2){
            if(deployedPlants[i].hp>10){
                output += "<div class='plants' style="+'"'+"left:"+(deployedPlants[i].x*80+240)+"px; top:"+(deployedPlants[i].y*100+60)+"px; background: "+"url('img/Wallnut1.png')"+'; background-size: contain;"'+"></div>"
            }
            else if(deployedPlants[i].hp<=10 && deployedPlants[i].hp>5){
                output += "<div class='plants' style="+'"'+"left:"+(deployedPlants[i].x*80+240)+"px; top:"+(deployedPlants[i].y*100+60)+"px; background: "+"url('img/Wallnut2.png')"+'; background-size: contain;"'+"></div>"
            }
            else if(deployedPlants[i].hp<=5){
                output += "<div class='plants' style="+'"'+"left:"+(deployedPlants[i].x*80+240)+"px; top:"+(deployedPlants[i].y*100+60)+"px; background: "+"url('img/Wallnut3.png')"+'; background-size: contain;"'+"></div>"
            }
        }
        else{
            output += "<div class='plants' style="+'"'+"left:"+(deployedPlants[i].x*80+240)+"px; top:"+(deployedPlants[i].y*100+60)+"px; background: "+deployedPlants[i].img+'; background-size: cover;"'+"></div>"
        }
    }
    document.getElementById('plants').innerHTML = output;
}
function displayZombies(){
    var output = '';
    for(var i = 0; i<deployedZombies.length;i++){
        output += "<div class='zombies' style="+'"'+"left:"+(deployedZombies[i].x*80+240)+"px; top:"+(deployedZombies[i].y*100+60)+"px; background: "+deployedZombies[i].img+'; background-size: contain; background-repeat: no-repeat;"'+"></div>"
    }
    document.getElementById('zombies').innerHTML = output;
}
function generateZombies(){
    deployedZombies.push({hp: 10, x: 9, y: Math.floor(Math.random()*5), img:"url('img/zombie1.gif')"});
}
function generateConeheads(){
    deployedZombies.push({hp: 13, x: 9, y: Math.floor(Math.random()*5), img:"url('img/zombie2.gif')"});
}
function moveZombies(){
    for(var i=0; i<deployedZombies.length; i++){
        deployedZombies[i].x -=0.01;
        for(var j=0; j<deployedPlants.length; j++){
            if(Math.abs(deployedZombies[i].x-deployedPlants[j].x) < 1 && Math.abs(deployedZombies[i].y-deployedPlants[j].y == 0)){
                deployedZombies[i].x +=0.01;
            }
        }
        if(deployedZombies[i].x<-0.5){
            deployedZombies[i]=deployedZombies[deployedZombies.length-1];
            deployedZombies.pop();
            alert("Game Over! Try again.");
            location.reload();
        }
    }
}
function shootPeas(){
    for(var i=0; i<deployedPlants.length; i++){
        for(var j=0; j<deployedZombies.length; j++){
            if(deployedPlants[i].x < deployedZombies[j].x && deployedPlants[i].y == deployedZombies[j].y && deployedPlants[i].mod == 1){
                peaBullets.push({x: deployedPlants[i].x*80+300, y: deployedPlants[i].y*100+90});
                break;
            }
        }
    }
}
function movePeas(){
    for(var i=0; i<peaBullets.length; i++){
        peaBullets[i].x += 10;
        
        if(peaBullets[i].x>980){
            peaBullets[i] = peaBullets[peaBullets.length-1];
            peaBullets.pop();
        }
    }
}
function displayPeas(){
    var output = '';
    for(var i=0; i<peaBullets.length; i++){
        output += "<div class='peaBullets' style='top:"+peaBullets[i].y+"px; left:"+peaBullets[i].x+"px;'></div>";
    }
    document.getElementById('peaBullets').innerHTML = output;
}
function zombieCollision(){
    for(var i=0; i<peaBullets.length; i++){
        for(var j=0; j<deployedZombies.length; j++){
            if(Math.abs(((peaBullets[i].x-240)/80) - (deployedZombies[j].x)) < 0.1 && ((peaBullets[i].y-90)/100) == deployedZombies[j].y){
                peaBullets[i] = peaBullets[peaBullets.length-1];
                peaBullets.pop();
                deployedZombies[j].hp--;
                if(deployedZombies[j].hp <=0){
                    deployedZombies[j] = deployedZombies[deployedZombies.length-1];
                    deployedZombies.pop();
                }
            }
            if(peaBullets[i] == undefined){
                break;
            }
        }
    }
}
function zombieAttack(){
    for(var i=0; i<deployedZombies.length; i++){
        for(var j=0; j<deployedPlants.length; j++){
            if(Math.abs(deployedZombies[i].x-deployedPlants[j].x) < 1.1 && Math.abs(deployedZombies[i].y-deployedPlants[j].y == 0)){
                deployedPlants[j].hp--;
                if(deployedPlants[j].hp<=0){
                    deployedPlants[j] = deployedPlants[deployedPlants.length-1];
                    deployedPlants.pop();
                }
            }
        }
    }
}

document.getElementById("sunCard").onclick = function(){
    selectedCard = 0;
}
document.getElementById("peaCard").onclick = function(){
    selectedCard = 1;
}
document.getElementById("wallNutCard").onclick = function(){
    selectedCard = 2;
}
document.getElementById("sunDrops").onclick = function(event){
    for(var i=0; i<sunDrops.length;i++){
        if(event.target.style.top == sunDrops[i].y*100+130+'px' && event.target.style.left == sunDrops[i].x*80+300+'px'){
            sunDrops[i] = sunDrops[sunDrops.length-1];
            sunDrops.pop();
            suns += 50;
        }
    }
}
function printMousePos(event) {
    var occupied = false;
    let a = Math.floor((event.pageX-280)/80);
    let b = Math.floor((event.pageY-235)/100)
    if(a>=0 && a<=8 && b>=0 && b<=4){
        for(i=0; i<deployedPlants.length;i++){
            if(a == deployedPlants[i].x && b == deployedPlants[i].y){
                occupied = true;
            }
        }
        if(!occupied){
            if(selectedCard==0){
                if(suns>=50){
                deployedPlants.push({hp:5, mod: 0,energy: 0, x: a, y: b, img:"url('img/Sunflower.gif')"});
                suns -= 50;
                selectedCard=null;
                }
            }
            else if(selectedCard==1){
                if(suns>=100){
                    deployedPlants.push({hp: 7,mod: 1, x: a, y: b, img:"url('img/Peashooter.gif')"});
                    suns -= 100;
                    selectedCard=null;
                }
            }
            else if(selectedCard==2){
                if(suns>=50){
                    deployedPlants.push({hp: 15,mod: 2, x: a, y: b, img:"url('img/Wallnut1.png')"});
                    suns -= 50;
                    selectedCard=null;
                }
            }
        }
    }
  }
document.addEventListener("click", printMousePos);
function gameLoop(){
    displaySuns();
    displayPlants();
    movePeas();
    displayPeas();
    displayZombies();
    moveZombies();
    zombieCollision();
    if(deployedZombies[0]==null && end){
        alert("Victory!");
    }
}
var lvlInterval = setInterval(generateZombies,intensity);
var lvlIntensity = setInterval(difficultyUp, 30000)
function difficultyUp(){
    intensity -=3000;
    if(intensity < 3000){
        intensity = 1000;
    }
    clearInterval(lvlInterval);
    lvlInterval = setInterval(generateZombies,intensity);
}
function finale(){
    for(var i=0;i<3;i++){
        deployedZombies.push({hp: 10, x: 9, y: i, img:"url('img/zombie1.gif')"});
    }
    for(var i=3;i<5;i++){
        deployedZombies.push({hp: 10, x: 9, y: i, img:"url('img/zombie2.gif')"});
    }
    clearInterval(lvlIntensity);
    clearInterval(lvlInterval);
    end = true;
}
setTimeout(generateConeheads, 60000);
setTimeout(generateConeheads, 90000);
setTimeout(finale, 180000);
setInterval(displaySunDrops, 200);
setInterval(gameLoop,50);
setInterval(generateSuns, 15000);
setInterval(shootPeas, 1500);
setInterval(zombieAttack,1500)
setInterval(generateSunDrops, 300)
