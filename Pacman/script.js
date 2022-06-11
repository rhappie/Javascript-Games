
            var ghost1 ={
                x: 0,
                y: 0
            }
            var ghost2 = {
                x: 0,
                y: 0
            }
            var ghost3 = {
                x: 0,
                y: 0
            }
            var pacman = {
                x: 1,
                y: 1
            }
            var score = 0;
            var ghostArr1 = [];
            var ghostArr2 = [];
            var ghostArr3 = [];
            var pacmanArr = [];
            
            var randomNumber = Math.floor(Math.random() * 5);
            if(randomNumber==0){
                ghost1.x = 10;
                ghost1.y = 10;
                ghost2.x = 9;
                ghost2.y = 10;
                ghost3.x = 11;
                ghost3.y = 10;
                var world = [
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                    [1,2,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,3,1],
                    [1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1],
                    [1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1],
                    [1,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,1],
                    [1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1],
                    [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
                    [1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1],
                    [1,1,1,1,0,0,0,0,0,0,3,0,0,0,0,0,0,1,1,1,1],
                    [1,0,0,0,0,1,0,1,1,4,4,4,1,1,0,1,0,0,0,0,1],
                    [1,0,1,1,0,1,0,1,2,2,2,2,2,1,0,1,0,1,1,0,1],
                    [1,3,1,1,0,1,3,1,2,2,2,2,2,1,3,1,0,1,1,3,1],
                    [1,0,0,0,0,1,0,1,2,2,2,2,2,1,0,1,0,0,0,0,1],
                    [1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1],
                    [1,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,1],
                    [1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1],
                    [1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1],
                    [1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1],
                    [1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1],
                    [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1],
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                ];
            }
            else if(randomNumber == 1){
                ghost1.x = 10;
                ghost1.y = 10;
                ghost2.x = 9;
                ghost2.y = 10;
                ghost3.x = 11;
                ghost3.y = 10;
                var world = [
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                    [1,2,0,0,0,0,0,0,1,0,3,0,1,0,0,0,0,0,0,3,1],
                    [1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1],
                    [1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1],
                    [1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1],
                    [1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1],
                    [1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1],
                    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
                    [1,1,1,1,0,1,0,1,1,0,3,0,1,1,0,1,0,1,1,1,1],
                    [1,3,0,0,0,1,0,1,1,4,4,4,1,1,0,1,0,0,0,3,1],
                    [1,0,1,1,0,1,0,1,2,2,2,2,2,1,0,1,0,1,1,0,1],
                    [1,0,1,1,0,1,0,1,2,2,2,2,2,1,0,1,0,1,1,0,1],
                    [1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1],
                    [1,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,1],
                    [1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1],
                    [1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1],
                    [1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1],
                    [1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1],
                    [1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1],
                    [1,3,0,0,0,0,0,0,1,0,3,0,1,0,0,0,0,0,0,3,1],
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                ];
            }
            else if(randomNumber == 2){
                ghost1.x = 10;
                ghost1.y = 10;
                ghost2.x = 9;
                ghost2.y = 10;
                ghost3.x = 11;
                ghost3.y = 10;
                var world = [
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                    [1,0,0,0,1,0,0,0,1,0,3,0,1,0,0,0,1,0,0,3,1],
                    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                    [1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
                    [1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1],
                    [1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1],
                    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                    [1,0,1,0,3,0,1,0,0,0,3,0,0,0,1,0,3,0,1,0,1],
                    [1,0,1,0,1,0,1,0,1,4,4,4,1,0,1,0,1,0,1,0,1],
                    [1,0,3,0,1,0,1,0,1,2,2,2,1,0,1,0,1,0,3,0,1],
                    [1,0,1,0,1,0,1,0,1,2,2,2,1,0,1,0,1,0,1,0,1],
                    [1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1],
                    [1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1],
                    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                    [1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1],
                    [1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,3,0,1,0,1],
                    [1,0,1,0,1,0,3,0,1,0,1,0,1,0,0,0,1,0,1,0,1],
                    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                    [1,3,0,0,1,0,1,0,1,0,3,0,1,0,1,0,1,0,0,3,1],
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                ];
            }
            else if(randomNumber == 3){
                ghost1.x = 10;
                ghost1.y = 10;
                ghost2.x = 9;
                ghost2.y = 10;
                ghost3.x = 11;
                ghost3.y = 10;
                var world = [
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                    [1,2,0,0,3,0,0,3,0,0,3,0,0,3,0,0,3,0,0,3,1],
                    [1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],
                    [1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],
                    [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1],
                    [1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
                    [1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
                    [1,3,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,3,1],
                    [1,0,1,1,0,1,1,0,1,1,4,1,1,0,1,1,0,1,1,0,1],
                    [1,0,1,1,0,1,1,0,1,1,2,1,1,0,1,1,0,1,1,0,1],
                    [1,3,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,0,0,3,1],
                    [1,0,1,1,0,1,1,0,1,2,2,2,1,0,1,1,0,1,1,0,1],
                    [1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1],
                    [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1],
                    [1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1],
                    [1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1],
                    [1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1],
                    [1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],
                    [1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],
                    [1,3,0,0,3,0,0,3,0,0,3,0,0,3,0,0,3,0,0,3,1],
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                ];
            }
            else if(randomNumber == 4){
                ghost1.x = 10;
                ghost1.y = 9;
                ghost2.x = 10;
                ghost2.y = 10;
                ghost3.x = 10;
                ghost3.y = 11;
                var world = [
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                    [1,2,0,0,0,1,1,1,1,0,3,0,1,1,1,1,0,0,0,3,1],
                    [1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1],
                    [1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1],
                    [1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1],
                    [1,0,1,1,0,3,1,1,0,1,1,1,0,1,1,3,0,1,1,0,1],
                    [1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1],
                    [1,1,0,0,1,1,0,0,3,0,0,0,3,0,0,1,1,0,0,1,1],
                    [1,1,1,0,0,1,1,1,0,1,4,1,0,1,1,1,0,0,1,1,1],
                    [1,1,1,1,0,0,1,1,0,1,2,1,0,1,1,0,0,1,1,1,1],
                    [1,1,1,1,1,3,0,0,0,1,2,1,0,0,0,3,1,1,1,1,1],
                    [1,1,1,1,0,0,1,1,0,1,2,1,0,1,1,0,0,1,1,1,1],
                    [1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1],
                    [1,1,0,0,1,1,0,0,3,0,0,0,0,3,0,1,1,0,0,1,1],
                    [1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1],
                    [1,0,1,1,0,3,1,1,0,1,1,1,0,1,1,0,3,1,1,0,1],
                    [1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1],
                    [1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1],
                    [1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1],
                    [1,3,0,0,0,1,1,1,1,0,3,0,1,1,1,1,0,0,0,3,1],
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                ];
            }

            function displayWorld(){
                var output = '';
                for(var i=0; i<world.length; i++){
                    output += "\n<div class='row'>\n";
                    for(var j=0; j<world[i].length;j++){
                        if(world[i][j] == 2){
                            output += "<div class='empty'></div>";
                        }
                        else if(world[i][j] == 1){
                            output += "<div class='brick'></div>";
                        }
                        else if(world[i][j] == 0){
                            output += "<div class='coin'></div>";
                        }
                        else if(world[i][j] == 3){
                            output += "<div class='cherry'></div>";
                        }
                        else if(world[i][j] == 4){
                            output += "<div class='gate'></div>";
                        }
                    }
                    
                    output += "\n</div>"
                }
                document.getElementById('world').innerHTML = output;
            }
            function displayGhost(){
                document.getElementById('ghost1').style.left = ghost1.x*20+"px";
                document.getElementById('ghost1').style.top = ghost1.y*20+"px";
                document.getElementById('ghost2').style.left = ghost2.x*20+"px";
                document.getElementById('ghost2').style.top = ghost2.y*20+"px";
                document.getElementById('ghost3').style.left = ghost3.x*20+"px";
                document.getElementById('ghost3').style.top = ghost3.y*20+"px";
                
            }
            function displayPacman(){
                document.getElementById('pacman').style.left = pacman.x*20+"px";
                document.getElementById('pacman').style.top = pacman.y*20+"px";
            }
            function displayScore(){
                document.getElementById('score').innerHTML = score;
            }
            function checkArr(){
                ghostArr1 = [ghost1.y,ghost1.x];
                ghostArr2 = [ghost2.y,ghost2.x];
                ghostArr3 = [ghost3.y,ghost3.x];
                pacmanArr = [pacman.y,pacman.x]
            }
            function compareElements(x,y){
                if(x[0] == y[0] && x[1] == y[1]){
                    return true
                }
                else{
                    return false
                }
            }

            function followPacman(){
                if(ghost1.x<pacman.x && world[ghost1.y][ghost1.x+1] != 1){ //follow right
                    ghost1.x++;
                    checkArr();
                    if(compareElements(ghostArr1,ghostArr2) || compareElements(ghostArr1,ghostArr3)){
                        ghost1.x--;
                    }
                }
                else if(ghost1.x>pacman.x && world[ghost1.y][ghost1.x-1] != 1){ //follow left
                    ghost1.x--;
                    checkArr();
                    if(compareElements(ghostArr1,ghostArr2) || compareElements(ghostArr1,ghostArr3)){
                        ghost1.x++;
                    }
                }
                else if(ghost1.y<pacman.y && world[ghost1.y+1][ghost1.x] != 1){ //follow down
                    ghost1.y++;
                    checkArr();
                    if(compareElements(ghostArr1,ghostArr2) || compareElements(ghostArr1,ghostArr3)){
                        ghost1.y--;
                    }
                }
                else if(ghost1.y>pacman.y && world[ghost1.y-1][ghost1.x] != 1){ //follow up
                    ghost1.y--;
                    checkArr();
                    if(compareElements(ghostArr1,ghostArr2) || compareElements(ghostArr1,ghostArr3)){
                        ghost1.y++;
                    }
                }
                
                if(ghost2.x<pacman.x && world[ghost2.y][ghost2.x+1] != 1){ //follow right
                    ghost2.x++;
                    checkArr();
                    if(compareElements(ghostArr2,ghostArr1) || compareElements(ghostArr2,ghostArr3)){
                        ghost2.x--;
                    }
                }
                else if(ghost2.x>pacman.x && world[ghost2.y][ghost2.x-1] != 1){ //follow left
                    ghost2.x--;
                    checkArr();
                    if(compareElements(ghostArr2,ghostArr1) || compareElements(ghostArr2,ghostArr3)){
                        ghost2.x++;
                    }
                }
                else if(ghost2.y<pacman.y && world[ghost2.y+1][ghost2.x] != 1){ //follow down
                    ghost2.y++;
                    checkArr();
                    if(compareElements(ghostArr2,ghostArr1) || compareElements(ghostArr2,ghostArr3)){
                        ghost2.y--;
                    }
                }
                else if(ghost2.y>pacman.y && world[ghost2.y-1][ghost2.x] != 1){ //follow up
                    ghost2.y--;
                    checkArr();
                    if(compareElements(ghostArr2,ghostArr1) || compareElements(ghostArr2,ghostArr3)){
                        ghost2.y++;
                    }
                }

                if(ghost3.x<pacman.x && world[ghost3.y][ghost3.x+1] != 1){ //follow right
                    ghost3.x++;
                    checkArr();
                    if(compareElements(ghostArr3,ghostArr1) || compareElements(ghostArr3,ghostArr2)){
                        ghost3.x--;
                    }
                }
                else if(ghost3.x>pacman.x && world[ghost3.y][ghost3.x-1] != 1){ //follow left
                    ghost3.x--;
                    checkArr();
                    if(compareElements(ghostArr3,ghostArr1) || compareElements(ghostArr3,ghostArr2)){
                        ghost3.x++;
                    }
                }
                else if(ghost3.y<pacman.y && world[ghost3.y+1][ghost3.x] != 1){ //follow down
                    ghost3.y++;
                    checkArr();
                    if(compareElements(ghostArr3,ghostArr1) || compareElements(ghostArr3,ghostArr2)){
                        ghost3.y--;
                    }
                }
                else if(ghost3.y>pacman.y && world[ghost3.y-1][ghost3.x] != 1){ //follow up
                    ghost3.y--;
                    checkArr();
                    if(compareElements(ghostArr3,ghostArr1) || compareElements(ghostArr3,ghostArr2)){
                        ghost3.y++;
                    }
                }
            }
            var game = true
            function gameOver(e){
                checkArr();
                if(compareElements(pacmanArr,ghostArr1) || compareElements(pacmanArr,ghostArr2) || compareElements(pacmanArr,ghostArr3)){
                    document.getElementById('gameover').style.visibility='visible';
                    document.getElementById('gameover').innerHTML="Game Over\nScore: "+score;
                    game=false;
                }
            }

            displayWorld();
            displayGhost();
            displayPacman();
            displayScore();

            document.onkeydown = function(e){
                if(game){
                    if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 1){ //left
                            pacman.x--;
                    }
                    else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 1){ //right
                            pacman.x++;
                    }
                    else if(e.keyCode == 38 && world[pacman.y-1][pacman.x] != 1){ //top
                            pacman.y--;
                    }
                    else if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 1 && world[pacman.y+1][pacman.x] != 4){ //bottom
                            pacman.y++;
                    }
                    
                    if(world[pacman.y][pacman.x] == 0){
                        world[pacman.y][pacman.x] = 2;
                        score += 10;
                        displayWorld();
                        displayScore();
                    }
                    if(world[pacman.y][pacman.x] == 3){
                        world[pacman.y][pacman.x] = 2;
                        score += 20;
                        displayWorld();
                        displayScore();
                    }
                    followPacman();
                    displayGhost();
                    displayPacman();
                    gameOver();
                }
            }