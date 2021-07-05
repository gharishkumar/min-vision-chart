var row_count = 7;
var row_start = 0, row_end = row_count;
var content_val = [['E'],['F','P'],['T','O','Z'],['L','P','E','D'],['P','E','C','F','D'],['E','D','F','C','Z','P'],['F','E','L','O','P','Z','D']];
var row_size = ['60','36','24','18','12','9','6'];
const size = [1,8/13,6/13,7/26,5/26,2/13,3/26,1/13,1/26]; //diff in font size in row
var flag = true, redgreen = false;
var randLetter, randNumber;
var list = ['<div class="btn-symbol">e</div><div class="btn-name">Landolt C</div></button></div>','<div class="btn-symbol">a</div><div class="btn-name">Tumbling E</div>','<div class="btn-symbol"><div class="btn-symbol-box"><div class="btn-symbol-in">E</div><div class="btn-symbol-in">F P</div><div class="btn-symbol-in">T O Z</div></div></div><div class="btn-name">Sellen</div>','<div class="btn-symbol"><div class="btn-symbol-box-rg">e &nbsp; e</div></div><div class="btn-name">Red Green</div>','<div class="btn-symbol">7</div><div class="btn-name">Numerics</div>','<div class="btn-symbol ped">mo</div><div class="btn-name">Pediatrics</div>'];
var list_fn = ['C_Chart()','E_Chart()','Sellen_Chart()','Red_Green_Chart()','Numerics_Chart()','Pediatrics_Chart()'];
var bg = 'linear-gradient(135deg, rgb(250, 170, 148), rgba(255,0,0,0) 60%),linear-gradient(45deg, rgb(214, 120, 151), rgba(0,0,255,0) 60%),linear-gradient(225deg, rgb(108, 184, 219), rgba(0,255,0,0) 60%),linear-gradient(315deg, rgb(150, 98, 199) , rgba(0,255,0,0) 60%)';
// var bg = 'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)';
if (document.documentElement.clientWidth > document.documentElement.clientHeight) {
    render(2);
} else {
    render(3);
}
var contents = document.getElementsByClassName('content');
var contents1 = document.getElementsByClassName('content1');
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
document.addEventListener('swiped-up', function(e) {
    row_start = row_end < row_size.length ? row_end : 0;
    row_end = row_end + row_count > row_size.length ? row_size.length : row_end + row_count;
    showChart(row_start, row_end,0);
});
document.addEventListener('swiped-down', function(e) {
    row_end = row_start > 0 ? row_start :row_count;
    row_start = row_end - row_count > 0 ? row_end - row_count : 0;
    showChart(row_start, row_end,0);
});
function showChart (row_start, row_end,ani) {
    var chart = document.getElementById('chart');
    var row = chart.getElementsByClassName('row');
    for (var i = 0; i < row.length; i++) {
        row[i].style.display = 'none';
    }
    for (var i = row_start; i < row_end; i++) {
        if(window.innerWidth > 1281) {
            if(ani == 1) {
                row[i].style.animation = 'move-bottom .4s';
            }
            else if(ani == -1) {
                    row[i].style.animation = 'move-top .4s';
            }
        }
        row[i].style.display = 'flex';
    }
}
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    console.log(e.keyCode);
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
        localStorage.setItem("fontSize", contents[0].style.fontSize.slice(0, -2) - 0);
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
        localStorage.setItem("fontSize", contents[0].style.fontSize.slice(0, -2) - 0);
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
        localStorage.setItem("fontSize", contents[0].style.fontSize.slice(0, -2) - 0);
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
        localStorage.setItem("fontSize", contents[0].style.fontSize.slice(0, -2) - 0);
    }
    else if (e.keyCode == '33') {
        // row up
        row_end = row_start > 0 ? row_start :row_count;
        row_start = row_end - row_count > 0 ? row_end - row_count : 0;
        showChart(row_start, row_end,1);
    }
    else if (e.keyCode == '34') {
        // row down
        row_start = row_end < row_size.length ? row_end : 0;
        row_end = row_end + row_count > row_size.length ? row_size.length : row_end + row_count;
        showChart(row_start, row_end,-1);
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
    var buttons = document.getElementsByTagName('button');
        for (var i = 0; i < buttons.length; i++) {
            // console.log(button[i].tabIndex);
            if (buttons[i].tabIndex == 0) {
                buttons[i].focus();
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
    var fullscreen = document.createElement('button');
    fullscreen.id = 'fullscreen';
    fullscreen.setAttribute("tabindex", "-1");
    fullscreen.setAttribute('onclick','openFullscreen()');
    fullscreen.innerHTML = 'FullScreen';
    grid.appendChild(fullscreen);
    if(window.innerHeight == screen.height) {
        fullscreen.style.display = 'none';
    }
    for (i = 0; i < h; i++) {                       //((h == 3) ? 2 : 3) => if portrait 2 columns, if landscape 3 columns
        var row = document.createElement("div");
        row.classList.add("row");
        for (j = 0; j < ((h == 3) ? 2 : 3); j++) {  //((h == 3) ? 2 : 3) => if portrait 3 rows, if landscape 2 rows
            var gridcell = document.createElement("div");
            gridcell.classList.add("gridcell");
            gridcell.setAttribute("role", "gridcell");
            var div = document.createElement("button");
            div.setAttribute("onclick",list_fn[k])
            div.setAttribute("tabindex", "-1");
            div.innerHTML = list[k];
            gridcell.appendChild(div);
            row.appendChild(gridcell);
            k++;
        }
        grid.appendChild(row);
    }
    setTimeout(setFocus, 100);var chart = document.createElement('div');
    chart.id = 'chart';
    var back = document.createElement('button');
    back.id = 'back';
    back.setAttribute('onclick','back()');
    back.innerHTML = '⬅';    
    chart.appendChild(back);
    for (var i = 0; i < row_size.length; i++) {
        var row = document.createElement("div");
        row.classList.add("row");
        var left_num = document.createElement("div");
        left_num.classList.add("left-num");
        left_num.innerHTML = '6/' + row_size[i];
        row.appendChild(left_num);
        var content = document.createElement("div");
        content.classList.add("content");
        if (localStorage.fontSize) {
            content.style.fontSize = localStorage.fontSize*size[i] + 'px';
        } else {
            content.style.fontSize = 20 *size[i] + 'px';
        }
        for (var j = 0; j < content_val[i].length; j++) {
            var letter = document.createElement("div");
            letter.innerHTML = content_val[i][j];
            content.appendChild(letter);
        }
        row.appendChild(content);
        var content1 = document.createElement("div");
        content1.classList.add("content1");
        if (localStorage.fontSize) {
            content1.style.fontSize = localStorage.fontSize *size[i] + 'px';
        } else {
            content1.style.fontSize = 20 *size[i] + 'px';
        }
        for (var j = 0; j < content_val[i].length; j++) {
            var letter = document.createElement("div");
            letter.innerHTML = content_val[i][j];
            content1.appendChild(letter);
        }
        row.appendChild(content1);
        var right_num = document.createElement("div");
        right_num.classList.add("right-num");
        right_num.innerHTML = '6/' + row_size[i];
        row.appendChild(right_num);
        chart.appendChild(row);
    }
    document.body.appendChild(chart);
    showChart(row_start, row_end,0);
}