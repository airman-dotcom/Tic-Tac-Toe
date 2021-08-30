let player = new Array();
let cpu = new Array();
let number;
let board = new Array();
let letter;
let rand;
let person;
let add1;
let add2;
let number_of_circle_cpu = 0;
let number_of_circle_player = 0;
let d = 0;
var square_cpu1;
var square_cpu2;
var square_cpu3;
var square_cpu4;
var square_cpu5;
var square_player1;
var square_player2;
var square_player3;
var square_player4;
var square_player5;
for (let h = 0; h < 5 || h === 5; h++){
    eval('square_cpu' + h  + '= document.createElement("div");')
    eval('square_cpu' + h + '.style.width = 28 + "px"')
    eval('square_cpu' + h + '.style.height = 28 + "px";')
    eval('square_cpu' + h + '.style.backgroundColor = "red";')
    eval('square_player' + h + ' = document.createElement("div");')
    eval('square_player' + h + '.style.width = 28 + "px";')
    eval('square_player' + h + '.style.height = 28 + "px";')
    eval('square_player' + h + '.style.backgroundColor = "blue";')
    console.log(eval('square_cpu' + h));
    console.log(eval('square_player' + h));
}


function next() {
    if (cpu.length < 4) {
        if (person === "cpu") {
            rand = Math.floor(Math.random() * 9) + 1;
            while (player.includes(rand) &&  cpu.includes(rand)) {
                rand = Math.floor(Math.random() * 9) + 1;
            }
            test();
            console.log(player);
            console.log(cpu);
            circle("cpua");
        }
    }
    if (cpu.length === 4) {
        for (let i = 0; i < player.length || i === player.length; i++) {
            add1 = add1 + player[i];
        }
        for (let j = 0; j < cpu.length || j === cpu.length; j++) {
            add2 = add2 + cpu[j];
        }
        cpu.push(45 - add1 + add2)
    }
}


function playertest() {
    if (!(player.includes(number))) {
        if (!(cpu.includes(number))) {
            player.push(number);
            d++;
            circle("no_cpua");
            next();
        }
    }
    return;
}


function test() {
    if (!(player.includes(5)) && !(cpu.includes(5))) {
        cpu.push(5);
        return;
    }
    else {
        if (!(cpu.includes(rand))) {
            if (!(player.includes(rand))) {
                cpu.push(rand);
                return;
            }
        }
        rand = Math.floor(Math.random() * 9) + 1;
        test()
    }
}

window.onclick = e => {
    if (player.length < 5) {
        if (e.target.tagName === "DIV"){
            if (!(player.includes(e.target.id)) && !(cpu.includes(e.target.id))) {
                person = "player";
                letter = e.target.id;
                number = letter.charCodeAt(0) - 96;
                person = "cpu";
                playertest();
            }
        }
    }
    else {
        alert("Draw");
        for (let a = 0; a < player.length || a === player.length; a++) {
            add1 = add1 + player[a];
        }
        for (let b = 0; b < cpu.length || b === cpu.length; b++) {
            add2 = add2 + cpu[b];
        }
        player.push(45 - add1 + add2)
        console.log(player);
    }
}


function circle(who) {
    if (who === "no_cpua") {
        number_of_circle_player++;
        document.getElementById((String.fromCharCode(player[player.length - 1] + 64)).toLowerCase()).style.backgroundColor = "blue";
        if (player.includes(1) && player.includes(2) && player.includes(3)) {
            winner_me();
        }
        if (player.includes(1) && player.includes(5) && player.includes(9)) {
            winner_me();
        }
        if (player.includes(4) && player.includes(5) && player.includes(6)) {
            winner_me();
        }
        if (player.includes(7) && player.includes(8) && player.includes(9)) {
            winner_me();
        }
        if (player.includes(7) && player.includes(5) && player.includes(3)) {
            winner_me();
        }
        if (player.includes(1) && player.includes(4) && player.includes(7)) {
            winner_me();
        }
        if (player.includes(2) && player.includes(5) && player.includes(8)) {
            winner_me();
        }
        if (player.includes(3) && player.includes(6) && player.includes(9)) {
            winner_me();
        }
    }
    if (who === "cpua") {
        document.getElementById((String.fromCharCode(cpu[cpu.length - 1] + 64)).toLowerCase()).style.backgroundColor = "red";
        if (cpu.includes(1) && cpu.includes(2) && cpu.includes(3)) {
            winner_comp();
        }
        if (cpu.includes(1) && cpu.includes(5) && cpu.includes(9)) {
            winner_comp();
        }
        if (cpu.includes(4) && cpu.includes(5) && cpu.includes(6)) {
            winner_comp();
        }
        if (cpu.includes(7) && cpu.includes(8) && cpu.includes(9)) {
            winner_comp();
        }
        if (cpu.includes(7) && cpu.includes(5) && cpu.includes(3)) {
            winner_comp();
        }
        if (cpu.includes(1) && cpu.includes(4) && cpu.includes(7)) {
            winner_comp();
        }
        if (cpu.includes(2) && cpu.includes(5) && cpu.includes(8)) {
            winner_comp();
        }
        if (cpu.includes(3) && cpu.includes(6) && cpu.includes(9)) {
            winner_comp();
        }
    }
}

function winner_me() {
    alert("You Win!");
}

function winner_comp() {
    alert("CPU Wins!");
}