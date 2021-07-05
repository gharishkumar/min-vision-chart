var bg = 'linear-gradient(135deg, rgb(250, 170, 148), rgba(255,0,0,0) 60%),linear-gradient(45deg, rgb(214, 120, 151), rgba(0,0,255,0) 60%),linear-gradient(225deg, rgb(108, 184, 219), rgba(0,255,0,0) 60%),linear-gradient(315deg, rgb(150, 98, 199) , rgba(0,255,0,0) 60%)';
//var bg = 'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)';
const size = [1,8/13,6/13,7/26,5/26,2/13,3/26,1/13,1/26]; //diff in font size in row
if (document.documentElement.clientWidth > document.documentElement.clientHeight) {
    render(2);
} else {
    render(3);
}
var contents = document.getElementsByClassName('content');
var contents1 = document.getElementsByClassName('content1');
var flag = true, redgreen = false;
var randLetter, randNumber;
window.addEventListener("resize", function (event) {
    if (document.documentElement.clientWidth > document.documentElement.clientHeight) {
        render(2);
    } else {
        render(3);
    }
});
window.addEventListener("orientationchange", function (event) {
    if (event.target.screen.orientation.angle == "0") {
        render(3);
    } else {
        render(2);
    }
});

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
function generateRandomE() {
    const alphabet = "abcd"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
function generateRandomC() {
    const alphabet = "efghijkl"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
function generateRandomSymbol() {
    const alphabet = "mnop"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
function generateRandomNumer(max) {
    return Math.floor(Math.random() * max);
}
function back() {  
    if (redgreen) {
        document.body.style.background = bg;
        for(var i = 0; i<contents1.length; i++) {
            contents1[i].style.display = 'none'
        }   
        redgreen = false;
    }
    document.getElementById('chart').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    document.getElementById('back').style.display = 'none';
}
function chart () {
    document.getElementById('app').style.display = 'none';
    document.getElementById('back').style.display = 'block';
    document.getElementById('chart').style.display = 'grid';
}
function C_Chart() {
    for(var i=0; i < contents.length; i++) {
        var leters = contents[i].getElementsByTagName('div');
        for(var j=0; j < leters.length; j++) {
            randLetter = generateRandomC();
            contents[i].getElementsByTagName('div')[j].textContent = randLetter;
            contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
        }
    }
    chart();
}
function E_Chart() {
    for(var i=0; i < contents.length; i++) {
        var leters = contents[i].getElementsByTagName('div');
        for(var j=0; j < leters.length; j++) {
            randLetter = generateRandomE();
            contents[i].getElementsByTagName('div')[j].textContent = randLetter;
            contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
        }
    }
    chart();
}
function Sellen_Chart() {
    for(var i=0; i < contents.length; i++) {
        var leters = contents[i].getElementsByTagName('div');
        for(var j=0; j < leters.length; j++) {
            randLetter = generateRandomLetter();
            contents[i].getElementsByTagName('div')[j].textContent = randLetter;
            contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
        }
    }
    chart();
}
function Red_Green_Chart() {
    document.body.style.background = 'linear-gradient(to right,rgb(255, 0,0) 50%, rgb(0,255,0) 50%)';
    for(var i = 0; i<contents1.length; i++) {
        contents1[i].style.display = 'flex'
    }
    redgreen = true;
    chart();
}
function Numerics_Chart() {
    for(var i=0; i < contents.length; i++) {
        var leters = contents[i].getElementsByTagName('div');
        for(var j=0; j < leters.length; j++) {
            randNumber = generateRandomNumer(9);
            contents[i].getElementsByTagName('div')[j].textContent = randNumber;
            contents1[i].getElementsByTagName('div')[j].textContent = randNumber;
        }
    }
    chart();
}
function Pediatrics_Chart() {
    for(var i=0; i < contents.length; i++) {
        var leters = contents[i].getElementsByTagName('div');
        for(var j=0; j < leters.length; j++) {
            randLetter = generateRandomSymbol();
            contents[i].getElementsByTagName('div')[j].textContent = randLetter;
            contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
        }
    }
    chart();
}
document.addEventListener('swiped-right', function(e) {
    back();
});
document.addEventListener('swiped-left', function(e) {
    chart();
});
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    // console.log(e.keyCode);
    if (e.keyCode == '8') {
        back();
        setTimeout(setFocus, 100);
    }
    else if (e.keyCode == '104') {
        // up arrow
        contents[0].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) + 10 ) + 'px';
        contents1[0].style.fontSize = ((contents1[0].style.fontSize.slice(0, -2) - 0) + 10 ) + 'px';

        for(var i=1; i < contents.length; i++) {
            contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
            contents1[i].style.fontSize = ((contents1[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
        }
        console.log(contents[0].style.fontSize);
        localStorage.setItem("fontSize", contents[0].style.fontSize);
    }
    else if (e.keyCode == '98') {
        // down arrow  
        contents[0].style.fontSize = (contents[0].style.fontSize.slice(0, -2) - 10 ) + 'px';
        contents1[0].style.fontSize = (contents1[0].style.fontSize.slice(0, -2) - 10 ) + 'px';

        for(var i=1; i < contents.length; i++) {
            contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
            contents1[i].style.fontSize = ((contents1[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
        }
        console.log(contents[0].style.fontSize);
        localStorage.setItem("fontSize", contents[0].style.fontSize);
    }
    else if (e.keyCode == '100') {
        // left arrow
        contents[0].style.fontSize = (contents[0].style.fontSize.slice(0, -2) - 1 ) + 'px';
        content1s[0].style.fontSize = (contents1[0].style.fontSize.slice(0, -2) - 1 ) + 'px';

        for(var i=1; i < contents.length; i++) {
            contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
            contents1[i].style.fontSize = ((contents1[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
        }
        console.log(contents[0].style.fontSize);
        localStorage.setItem("fontSize", contents[0].style.fontSize);
    }
    else if (e.keyCode == '102') {
        // right arrow
        contents[0].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) + 1 ) + 'px';
        contents1[0].style.fontSize = ((contents1[0].style.fontSize.slice(0, -2) - 0) + 1 ) + 'px';

        for(var i=1; i < contents.length; i++) {
            contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
            contents1[i].style.fontSize = ((contents1[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
        }
        console.log(contents[0].style.fontSize);
        localStorage.setItem("fontSize", contents[0].style.fontSize);
    }
    else if (e.keyCode == '39') {
        // right arrow
        for(var i=0; i < contents.length; i++) {
            var leters = contents[i].getElementsByTagName('div');
            for(var j=0; j < leters.length; j++) {
                randLetter = generateRandomLetter();
                contents[i].getElementsByTagName('div')[j].textContent = randLetter;
                contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
            }
        }
    }
    else if (e.keyCode == '38') {
        // up arrow
        for(var i=0; i < contents.length; i++) {
            var leters = contents[i].getElementsByTagName('div');
            for(var j=0; j < leters.length; j++) {
                randLetter = generateRandomE();
                contents[i].getElementsByTagName('div')[j].textContent = randLetter;
                contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
            }
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        for(var i=0; i < contents.length; i++) {
            var leters = contents[i].getElementsByTagName('div');
            for(var j=0; j < leters.length; j++) {
                randLetter = generateRandomC();
                contents[i].getElementsByTagName('div')[j].textContent = randLetter;
                contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
            }
        }
    }
    else if (e.keyCode == '37') {
        // left arrow
        for(var i=0; i < contents.length; i++) {
            var leters = contents[i].getElementsByTagName('div');
            for(var j=0; j < leters.length; j++) {
                randLetter = generateRandomSymbol();
                contents[i].getElementsByTagName('div')[j].textContent = randLetter;
                contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
            }
        }
    }
    else if (e.keyCode == '17') {
        // ctrl
        for(var i=0; i < contents.length; i++) {
            var leters = contents[i].getElementsByTagName('div');
            for(var j=0; j < leters.length; j++) {
                randNumber = generateRandomNumer(9);
                contents[i].getElementsByTagName('div')[j].textContent = randNumber;
                contents1[i].getElementsByTagName('div')[j].textContent = randNumber;
            }
        }
    }
    else if (e.key == 'a') {
        for(var i=0; i < contents.length; i++) {
            contents[i].style.fontFamily = 'Eyechart';
            contents1[i].style.fontFamily = 'Eyechart';
        }
    }
    else if (e.key == 'z') {
        for(var i=0; i < contents.length; i++) {
            contents[i].style.fontFamily = 'Eyechart_Lea';
            contents1[i].style.fontFamily = 'Eyechart_Lea';
        }
    }
    else if (e.key == 's') {
        for(var i=0; i < contents.length; i++) {
            contents[i].style.fontFamily = 'SnellenMK';
            contents1[i].style.fontFamily = 'SnellenMK';
            if(flag) {
                // contents[i].style.fontSize = ((contents[i].style.fontSize.slice(0, -2) - 0) * 106/51 ) + 'px'; //diff in font size
                flag = false;
            }
        }
    }
    else if (e.key == 'x') {
        for(var i=0; i < contents.length; i++) {
            contents[i].style.fontFamily = 'OpticalK';
            contents1[i].style.fontFamily = 'OpticalK';
        }
    }
    
    else if (e.key == 'r') {
        if(!redgreen) {
            document.body.style.background = 'linear-gradient(to right,rgb(255, 0,0) 50%, rgb(0,255,0) 50%)';
            for(var i = 0; i<contents1.length; i++) {
                contents1[i].style.display = 'flex'
            }
            redgreen = true;
        } else {
            document.body.style.background = bg;
            for(var i = 0; i<contents1.length; i++) {
                contents1[i].style.display = 'none'
            }
            redgreen = false;
        }
    }

}
function openFullscreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
      document.documentElement.msRequestFullscreen();
    }
}
function setFocus () {
    var button = document.getElementsByTagName('button');
        for (var i = 0; i < button.length; i++) {
            // console.log(button[i].tabIndex);
            if (button[i].tabIndex == 0) {
                button[i].focus();
            }
        }
}
function render(h) {
    document.body.innerHTML ="";
    document.body.style.background = bg;
    var app = document.createElement("div");
    var grid = document.createElement("div");
    grid.setAttribute("role", "grid");
    grid.classList.add("grid");
    app.id = "app";
    app.appendChild(grid);
    document.body.appendChild(app);
    var i, j, k=0;
    var list = ['<div class="btn-symbol">e</div><div class="btn-name">Landolt C</div></button></div>','<div class="btn-symbol">a</div><div class="btn-name">Tumbling E</div>','<div class="btn-symbol"><div class="btn-symbol-box"><div class="btn-symbol-in">E</div><div class="btn-symbol-in">F P</div><div class="btn-symbol-in">T O Z</div></div></div><div class="btn-name">Sellen</div>','<div class="btn-symbol"><div class="btn-symbol-box-rg">e &nbsp; e</div></div><div class="btn-name">Red Green</div>','<div class="btn-symbol">7</div><div class="btn-name">Numerics</div>','<div class="btn-symbol ped">mo</div><div class="btn-name">Pediatrics</div>'];
    var list_fn = ['C_Chart()','E_Chart()','Sellen_Chart()','Red_Green_Chart()','Numerics_Chart()','Pediatrics_Chart()'];
    for (i = 0; i < h; i++) {
        var row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
    }
    var button = document.createElement('button');
    button.id = 'fullscreen';
    button.setAttribute("tabindex", "-1");
    button.setAttribute('onclick','openFullscreen()');
    button.innerHTML = 'FullScreen';
    grid.appendChild(button);
    for (i = 0; i < ((h == 3) ? 3 : 2); i++) { //((h == 3) ? 2 : 3) => if portrait 2 columns, if landscape 3 columns
        for (j = 0; j < ((h == 3) ? 2 : 3); j++) { //((h == 3) ? 2 : 3) => if portrait 3 rows, if landscape 2 rows
            var gridcell = document.createElement("div");
            gridcell.classList.add("gridcell");
            gridcell.setAttribute("role", "gridcell");
            var div = document.createElement("button");
            div.setAttribute("onclick",list_fn[k])
            div.setAttribute("tabindex", "-1");
            div.innerHTML = list[k];
            gridcell.appendChild(div);
            document.getElementsByClassName("row")[i].appendChild(gridcell);
            k++;
        }
    }
    setTimeout(setFocus, 100);
    var chart = document.createElement('div');
    chart.id = 'chart';
    chart.innerHTML = `<button id="back" onclick="back()">⬅</button>
    <div class="row"><div class="left-num">6/60</div><div class="content" style="font-size: 80px;"><div>E</div></div><div class="content1" style="font-size: 80px;"><div>E</div></div><div class="right-num">6/60</div></div>
    <div class="row"><div class="left-num">6/36</div><div class="content" style="font-size: 70px;"><div>F</div><div>P</div></div><div class="content1" style="font-size: 70px;"><div>F</div><div>P</div></div><div class="right-num">6/36</div></div>
    <div class="row"><div class="left-num">6/24</div><div class="content" style="font-size: 60px;"><div>T</div><div>O</div><div>Z</div></div><div class="content1" style="font-size: 60px;"><div>T</div><div>O</div><div>Z</div></div><div class="right-num">6/24</div></div>
    <div class="row"><div class="left-num">6/18</div><div class="content" style="font-size: 50px;"><div>L</div><div>P</div><div>E</div><div>D</div></div><div class="content1" style="font-size: 50px;"><div>L</div><div>P</div><div>E</div><div>D</div></div><div class="right-num">6/18</div></div>
    <div class="row"><div class="left-num">6/12</div><div class="content" style="font-size: 40px;"><div>P</div><div>E</div><div>C</div><div>F</div><div>D</div></div><div class="content1" style="font-size: 40px;"><div>P</div><div>E</div><div>C</div><div>F</div><div>D</div></div><div class="right-num">6/12</div></div>
    <div class="row"><div class="left-num">6/9</div><div class="content" style="font-size: 30px;"><div>E</div><div>D</div><div>F</div><div>C</div><div>Z</div><div>P</div></div><div class="content1" style="font-size: 30px;"><div>E</div><div>D</div><div>F</div><div>C</div><div>Z</div><div>P</div></div><div class="right-num">6/9</div></div>
    <div class="row"><div class="left-num">6/6</div><div class="content" style="font-size: 20px;"><div>F</div><div>E</div><div>L</div><div>O</div><div>P</div><div>Z</div><div>D</div></div><div class="content1" style="font-size: 20px;"><div>F</div><div>E</div><div>L</div><div>O</div><div>P</div><div>Z</div><div>D</div></div><div class="right-num">6/6</div></div>`;
    document.body.appendChild(chart);
    if(window.innerHeight == screen.height) {
        button.style.display = 'none';
    }
    var contents = document.getElementsByClassName('content');
    var contents1 = document.getElementsByClassName('content1');
    if (localStorage.fontSize) {
        contents[0].style.fontSize = localStorage.fontSize;
        contents1[0].style.fontSize = localStorage.fontSize;
    } else {
        contents[0].style.fontSize = '20px';
        contents1[0].style.fontSize = '20px';
    }
    for(var i=1; i < contents.length; i++) {
        contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
        contents1[i].style.fontSize = ((contents1[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
    }
}
