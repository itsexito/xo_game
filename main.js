let turn = 'X';
let title = document.querySelector('.title');
let box = [];


function game(id) {
    let ele = document.getElementById(id);
    if( turn === 'X' && ele.innerHTML === '') {
        ele.innerHTML = 'X';
        turn = 'O';
        title.innerHTML = "O Is Playing";
    } else if ( turn === 'O' && ele.innerHTML === '') {
        ele.innerHTML = 'O';
        turn = 'X';
        title.innerHTML = "X Is Playing";
    }
    if (checkForDraw()) {
        endgameDraw();
    } else {
        win();
    }
}

function checkForDraw() {
    for (let i = 1; i < 10; i++) {
        if (document.getElementById("i-" + i).innerHTML === '') {
            return false;
        }
    }
    return true; 
}

function win() {
    for(let i = 1; i < 10; i++){
        box[i] = document.getElementById("i-" + i).innerHTML;
    }
        if(box[1] == box[2] && box[2] == box[3] && box[1] != ''){
            endgame(1,2,3)
        }
        else if(box[4] == box[5] && box[4] == box[6] && box[4] != ''){
            endgame(4,5,6)
        }
        else if(box[7] == box[8] && box[8] == box[9] && box[7] != ''){
            endgame(7,8,9)
        }
        else if(box[1] == box[4] && box[4] == box[7] && box[1] != ''){
            endgame(1,4,7)
        }
        else if(box[2] == box[5] && box[5] == box[8] && box[2] != ''){
            endgame(2,5,8)
        }
        else if(box[3] == box[6] && box[6] == box[9] && box[3] != ''){
            endgame(3,6,9)
        }
        else if(box[1] == box[5] && box[5] == box[9] && box[1] != ''){
            endgame(1,5,9)
        }
        else if(box[3] == box[5] && box[5] == box[7] && box[3] != ''){
            endgame(3,5,7)
        }
}


function endgame(n1,n2,n3) {
    title.innerHTML = `${box[n1]} Is Winner`;
    for(let x = 1; x < 10; x++){
        document.getElementById("i-" + x).style['pointer-events'] = 'none';
    }
    document.getElementById("i-" + n1).style.background = '#FDCB9E';
    document.getElementById("i-" + n2).style.background = '#FDCB9E';
    document.getElementById("i-" + n3).style.background = '#FDCB9E';
    
    setInterval(function() {title.innerHTML += ".";},1000);
    setTimeout(function(){location.reload()},3000);
}

function endgameDraw() {
    title.innerHTML = "DRAW X & O";
        for(let x = 1; x < 10; x++){
        document.getElementById("i-" + x).style['pointer-events'] = 'none';
    }
    setInterval(function () {
        title.innerHTML += ".";
    }, 1000);
    setTimeout(function () {
        location.reload();
    }, 3000);
}
