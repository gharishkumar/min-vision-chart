var list = ['<div class="btn-symbol-a">c</div><div class="btn-name">Landolt C</div></button></div>',
            '<div class="btn-symbol-a">e</div><div class="btn-name">Tumbling E</div>',
            '<div class="btn-symbol"><div class="btn-symbol-box-se"><div class="btn-symbol-in-1">E</div><div class="btn-symbol-in-2">F P</div><div class="btn-symbol-in-3">T O Z</div></div></div><div class="btn-name">Sellen</div>',
            '<div class="btn-symbol-a trans"><div class="btn-symbol-box"><div class="btn-symbol-in-1">H C O Z</div><div class="btn-symbol-in-2">N S D H Z</div><div class="btn-symbol-in-3">K O V R C</div></div></div><div class="btn-name">LogMAR</div>',
            '<div class="btn-symbol trans"><div class="btn-symbol-box rg">e &nbsp; e</div></div><div class="btn-name">Red Green</div>',
            '<div class="btn-symbol-a">7</div><div class="btn-name">Numerics</div>',
            '<div class="btn-symbol-a abc trans">ABC</div><div class="btn-name">Alphabets</div>',
            '<div class="btn-symbol-a trans"><div class="btn-symbol-box med"><div class="btn-symbol-in-2 red">&#9679;</div><div class="btn-symbol-in-2 green"><div>&#9679</div><div>&#9679</div></div><div class="btn-symbol-in-2 white">&#9679;</div></div></div><div class="btn-name">Maddox</div>',
            '<div class="btn-symbol-a"><div class="btn-symbol-box ish"><img src="900px-Ishihara_9.png" id="moon" /></div></div><div class="btn-name">Ishihara</div>',
            '<div class="btn-symbol-a trans"><div class="btn-symbol-box"><div class="btn-symbol-in-2">N L F M</div><div class="btn-symbol-in-2 c1">X P R B</div><div class="btn-symbol-in-2 c2">U F N X</div></div></div><div class="btn-name">Contrast</div>',
            '<div class="btn-symbol"><div class="btn-symbol-box-scc"><div class="btn-symbol-in-1">|</div><div class="btn-symbol-in-2 scc"><div>&#9644;</div><div>&#9679;</div><div>&#9644;</div></div><div class="btn-symbol-in-1">|</div></div></div><div class="btn-name">SC1</div>',
            '<div class="btn-symbol"><div class="btn-symbol-box-scc"><div class="btn-symbol-in-1">|</div><div class="btn-symbol-in-2 scc"><div>&#9644;</div><div>&#9644;</div></div><div class="btn-symbol-in-1">|</div></div></div><div class="btn-name">SC2</div>',
            '<div class="btn-symbol-a trans"><div class="btn-symbol-box-scc"><svg viewBox="0 0 500 550"><polygon points="0,500 0,0 150,0 150,50 50,50 50,450 150,450 150,500" /><circle cx="250" cy="250" r="30"/><polygon points="500,0 500,500 350,500 350,450 450,450 450,50 350,50 350,0" /></svg></div></div><div class="btn-name">SC3</div>',
            '<div class="btn-symbol-a trans"><div class="btn-symbol-box-scc"><svg viewBox="0 0 500 550"><polygon points="0,0 500,0 500,150 450,150 450,50 50,50 50,150 0,150" /><circle cx="250" cy="250" r="30"/><polygon points="0,500 500,500 500,350 450,350 450,450 50,450 50,350 0,350" /></svg></div></div><div class="btn-name">SC4</div>',
            '<div class="btn-symbol ped trans">mo</div><div class="btn-name">Pediatrics</div>',
            '<div class="btn-symbol-a emo">📚</div><div class="btn-name">Education</div>',
            '<div class="btn-symbol-a emo">🐒</div><div class="btn-name">Cartoon</div>',
            '<div class="btn-symbol-a emo">🐘</div><div class="btn-name">Animals</div>',
            '<div class="btn-symbol-a trans"><div class="btn-symbol-box lan"><div class="btn-symbol-in-2">Regional</div><div class="btn-symbol-in-3">Tamil</div></div></div><div class="btn-name">Lang-1</div>',
            '<div class="btn-symbol-a trans"><div class="btn-symbol-box lan"><div class="btn-symbol-in-2">Regional</div><div class="btn-symbol-in-3">Malayalam</div></div></div><div class="btn-name">Lang-2</div>'];
var list_fn = [ 'C_Chart()',
                'E_Chart()',
                'Sellen_Chart()',
                'LogMAR()',
                'Red_Green_Chart()',
                'Numerics_Chart()',
                'Sellen_Chart()',
                'Maddox()',
                'Ishihara()',
                'Contrast()',
                'SC1()',
                'SC2()',
                'SC3()',
                'SC4()', 
                'Pediatrics_Chart()',
                'Education()',
                'Cartoon()',
                'Animals()',
                'Lang1()',
                'Lang2()'];

var content_vals = [['E'],['F','P'],['T','O','Z'],['L','P','E','D'],['P','E','C','F','D'],['E','D','F','C','Z','P'],['F','E','L','O','P','Z','D'],['F','E','L','O','P','Z','D','C'],['E','c','F','E','L','O','P','Z','D']];
var content_vals1 = [['H','O','T','Z'],['V','O','D','H'],['K','O','V','R','C'],['R','S','Z','K','D'],['N','H','C','O','V'],['D','K','H','V','N'],['R','S','C','O','Z'],['F','E','L','O','P'],['E','O','F','E','L']];
var row_size =  [60,36,24,18,12,9,6,5,4];
var log_size =  ['1.00','0.80','0.60','0.50','0.30','0.25','0.00','0.00','0.00'];
var row_count;
if (localStorage.rowCount) {
    row_count = localStorage.rowCount-0;
} else {
    row_count = row_size.length;
}
var row_start = 0, row_end = row_count;
var flag = true, redgreen = false;
var randLetter, randNumber;
var bg = 'rgb(247, 247, 128)';
// var bg = 'linear-gradient(135deg, rgb(250, 170, 148), rgba(255,0,0,0) 60%),linear-gradient(45deg, rgb(214, 120, 151), rgba(0,0,255,0) 60%),linear-gradient(225deg, rgb(108, 184, 219), rgba(0,255,0,0) 60%),linear-gradient(315deg, rgb(150, 98, 199) , rgba(0,255,0,0) 60%)';
// var bg = 'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)';
// var bg = 'url(bg/4.jpg)';
var row_num = 4,col_num = 5;
if (document.documentElement.clientWidth > document.documentElement.clientHeight) {
    render(row_num);
} else {
    render(col_num);
}
var contents = document.getElementsByClassName('content');
var contents1 = document.getElementsByClassName('content1');
var contents2 = document.getElementsByClassName('content2');
var left_num1 = document.getElementsByClassName('left-num1');
window.addEventListener("resize", function () {
    if (document.documentElement.clientWidth > document.documentElement.clientHeight) {
        render(row_num);
    } else {
        render(col_num);
    }
});
window.addEventListener("orientationchange", function (event) {
    if (event.target.screen.orientation.angle == "0") {
        render(col_num);
    } else {
        render(row_num);
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
    document.body.style.background = bg;
    if (redgreen) {
        for(let i = 0; i<contents1.length; i++) {
            contents1[i].style.display = 'none'
        }   
        redgreen = false;
    }
    document.getElementById('chart').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    document.getElementsByClassName('back')[0].style.display = 'none';
    document.getElementById('picture').style.display = 'none';
}
function chart() {
    document.getElementById('app').style.display = 'none';
    document.getElementsByClassName('back')[0].style.display = 'block';
    document.getElementById('chart').style.display = 'grid';
}
function picture() {
    document.getElementById('app').style.display = 'none';
    document.getElementsByClassName('back')[1].style.display = 'block';
    document.getElementById('picture').style.display = 'grid';
}
function C_Chart() {
    document.body.style.background = 'white';
    for(let i=0; i < contents.length; i++) {
        let leters = contents[i].getElementsByTagName('div');
        for(let j=0; j < leters.length; j++) {
            randLetter = generateRandomC();
            contents[i].style.fontFamily = 'Eyechart_Lea';
            contents1[i].style.fontFamily = 'Eyechart_Lea';
            contents[i].getElementsByTagName('div')[j].textContent = randLetter;
            contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
        }
    }
    chart();
}
function E_Chart() {
    document.body.style.background = 'white';
    for(let i=0; i < contents.length; i++) {
        let leters = contents[i].getElementsByTagName('div');
        for(let j=0; j < leters.length; j++) {
            randLetter = generateRandomE();
            contents[i].style.fontFamily = 'Eyechart_Lea';
            contents1[i].style.fontFamily = 'Eyechart_Lea';
            contents[i].getElementsByTagName('div')[j].textContent = randLetter;
            contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
        }
    }
    chart();
}
function Sellen_Chart() {
    document.body.style.background = 'white';
    for(let i=0; i < contents.length; i++) {
        let leters = contents[i].getElementsByTagName('div');
        for(let j=0; j < leters.length; j++) {
            randLetter = generateRandomLetter();
            contents[i].style.fontFamily = 'OpticalK';
            contents1[i].style.fontFamily = 'OpticalK';
            contents[i].getElementsByTagName('div')[j].textContent = randLetter;
            contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
        }
    }
    chart();
}
function Lang1() {
    document.body.style.background = 'white';
    for(let i=0; i < contents.length; i++) {
        let leters = contents[i].getElementsByTagName('div');
        for(let j=0; j < leters.length; j++) {
            randLetter = generateRandomLetter();
            contents[i].style.fontFamily = 'Tamil';
            contents1[i].style.fontFamily = 'Tamil';
            contents[i].getElementsByTagName('div')[j].textContent = randLetter;
            contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
        }
    }
    chart();
}
function Lang2() {
    document.body.style.background = 'white';
    for(let i=0; i < contents.length; i++) {
        let leters = contents[i].getElementsByTagName('div');
        for(let j=0; j < leters.length; j++) {
            randLetter = generateRandomLetter();
            contents[i].style.fontFamily = 'Malayalam';
            contents1[i].style.fontFamily = 'Malayalam';
            contents[i].getElementsByTagName('div')[j].textContent = randLetter;
            contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
        }
    }
    chart();
}
function LogMAR() {
    document.body.style.background = 'white';
    for(let i=0; i < contents2.length; i++) {
        left_num1[i].innerHTML = log_size[i];
        contents2[i].style.color = 'rgba(0,0,0,1)';
        let leters = contents2[i].getElementsByTagName('div');
        for(let j=0; j < leters.length; j++) {
            randLetter = generateRandomLetter();
            contents2[i].style.fontFamily = 'OpticalK';
            contents2[i].getElementsByTagName('div')[j].textContent = randLetter;
        }
    }
    document.getElementById('app').style.display = 'none';
    document.getElementsByClassName('back')[2].style.display = 'block';
    document.getElementById('chart-log').style.display = 'grid';
}
function Contrast() {
    document.body.style.background = 'white';
    for(let i=0; i < contents2.length; i++) {
        contents2[i].style.color = 'rgba(0,0,0,' + (1-i/10) + ')';
        console.log((100-i*10)+'%');
        // left_num1[i].innerHTML = '6/' + row_size[i];
        left_num1[i].innerHTML = (100-i*10)+'%';
        let leters = contents2[i].getElementsByTagName('div');
        for(let j=0; j < leters.length; j++) {
            randLetter = generateRandomLetter();
            contents2[i].style.fontFamily = 'OpticalK';
            contents2[i].getElementsByTagName('div')[j].textContent = randLetter;
        }
    }
    document.getElementById('app').style.display = 'none';
    document.getElementsByClassName('back')[2].style.display = 'block';
    document.getElementById('chart-log').style.display = 'grid';
}
function Red_Green_Chart() {
    document.body.style.background = 'linear-gradient(to right,rgb(255, 0,0) 50%, rgb(0,255,0) 50%)';
    for(let i = 0; i<contents1.length; i++) {
        contents[i].style.fontFamily = 'OpticalK';
        contents1[i].style.fontFamily = 'OpticalK';
        contents1[i].style.display = 'flex'
    }
    redgreen = true;
    chart();
}
function Numerics_Chart() {
    document.body.style.background = 'white';
    for(let i=0; i < contents.length; i++) {
        let leters = contents[i].getElementsByTagName('div');
        for(let j=0; j < leters.length; j++) {
            randNumber = generateRandomNumer(9);
            contents[i].style.fontFamily = 'OpticalK';
            contents1[i].style.fontFamily = 'OpticalK';
            contents[i].getElementsByTagName('div')[j].textContent = randNumber;
            contents1[i].getElementsByTagName('div')[j].textContent = randNumber;
        }
    }
    chart();
}
function Pediatrics_Chart() {
    document.body.style.background = 'white';
    for(let i=0; i < contents.length; i++) {
        let leters = contents[i].getElementsByTagName('div');
        for(let j=0; j < leters.length; j++) {
            randLetter = generateRandomSymbol();
            contents[i].style.fontFamily = 'Eyechart_Lea';
            contents1[i].style.fontFamily = 'Eyechart_Lea';
            contents[i].getElementsByTagName('div')[j].textContent = randLetter;
            contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
        }
    }
    chart();
}
function Maddox() {
    document.body.style.background = 'white';
    picture();
}
function Ishihara() {
    document.body.style.background = 'white';
    picture();
}
function SC1() {
    document.body.style.background = 'white';
    picture();
}
function SC2() {
    document.body.style.background = 'white';
    picture();
}
function SC3() {
    document.body.style.background = 'white';
    picture();
}
function SC4() {
    document.body.style.background = 'white';
    picture();
}
function Education() {
    document.body.style.background = 'white';
    picture();
}
function Cartoon() {
    document.body.style.background = 'white';
    picture();
}
function Animals() {
    document.body.style.background = 'white';
    picture();
}
document.addEventListener('swiped-right', function(e) {
    back();
});
document.addEventListener('swiped-left', function(e) {
    chart();
});
document.addEventListener('swiped-up', function(e) {
    row_start = row_end < row_size.length ? row_end : row_start;
    row_end = row_end + row_count > row_size.length ? row_size.length : row_end + row_count;
    showChart(row_start, row_end,0);
});
document.addEventListener('swiped-down', function(e) {
    row_end = row_start > 0 ? row_start :row_count;
    row_start = row_end - row_count > 0 ? row_end - row_count : 0;
    showChart(row_start, row_end,0);
});
function showChart (row_start, row_end,ani) {
    let chart = document.getElementById('chart');
    let row = chart.getElementsByClassName('row');
    for (let i = 0; i < row.length; i++) {
        row[i].style.display = 'none';
    }
    for (let i = row_start; i < row_end; i++) {
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
    // console.log(e.keyCode);
    if (e.keyCode == '8') {
        back();
        setTimeout(setFocus, 100);
    }
    else if (e.keyCode == '104') {
        // up arrow
        if (e.altKey) {
            row_count = row_count < row_size.length ? row_count + 1 : row_count;
            localStorage.setItem("rowCount",row_count);
            row_start = 0;
            row_end = row_count;
            showChart(row_start, row_end,0);
        } else {
            contents[0].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) + 10 ) + 'px';
            contents1[0].style.fontSize = ((contents1[0].style.fontSize.slice(0, -2) - 0) + 10 ) + 'px';

            for(let i=1; i < contents.length; i++) {
                contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *row_size[i]/row_size[0] ) + 'px';
                contents1[i].style.fontSize = ((contents1[0].style.fontSize.slice(0, -2) - 0) *row_size[i]/row_size[0] ) + 'px';
            }
            console.log(contents[0].style.fontSize);
            localStorage.setItem("fontSize", contents[0].style.fontSize.slice(0, -2) - 0);
        }
    }
    else if (e.keyCode == '98') {
        // down arrow
        if (e.altKey) {
            row_count = row_count > 1 ? row_count - 1 : 1;
            localStorage.setItem("rowCount",row_count);
            row_start = 0;
            row_end = row_count;
            showChart(row_start, row_end,0);
        } else {
            contents[0].style.fontSize = (contents[0].style.fontSize.slice(0, -2) - 10 ) + 'px';
            contents1[0].style.fontSize = (contents1[0].style.fontSize.slice(0, -2) - 10 ) + 'px';

            for(let i=1; i < contents.length; i++) {
                contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *row_size[i]/row_size[0] ) + 'px';
                contents1[i].style.fontSize = ((contents1[0].style.fontSize.slice(0, -2) - 0) *row_size[i]/row_size[0] ) + 'px';
            }
            console.log(contents[0].style.fontSize);
            localStorage.setItem("fontSize", contents[0].style.fontSize.slice(0, -2) - 0);
        }
    }
    else if (e.keyCode == '100') {
        // left arrow
        contents[0].style.fontSize = (contents[0].style.fontSize.slice(0, -2) - 1 ) + 'px';
        contents1[0].style.fontSize = (contents1[0].style.fontSize.slice(0, -2) - 1 ) + 'px';

        for(let i=1; i < contents.length; i++) {
            contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *row_size[i]/row_size[0] ) + 'px';
            contents1[i].style.fontSize = ((contents1[0].style.fontSize.slice(0, -2) - 0) *row_size[i]/row_size[0] ) + 'px';
        }
        console.log(contents[0].style.fontSize);
        localStorage.setItem("fontSize", contents[0].style.fontSize.slice(0, -2) - 0);
    }
    else if (e.keyCode == '102') {
        // right arrow
        contents[0].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) + 1 ) + 'px';
        contents1[0].style.fontSize = ((contents1[0].style.fontSize.slice(0, -2) - 0) + 1 ) + 'px';

        for(let i=1; i < contents.length; i++) {
            contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *row_size[i]/row_size[0] ) + 'px';
            contents1[i].style.fontSize = ((contents1[0].style.fontSize.slice(0, -2) - 0) *row_size[i]/row_size[0] ) + 'px';
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
        row_start = row_end < row_size.length ? row_end : row_start;
        row_end = row_end + row_count > row_size.length ? row_size.length : row_end + row_count;
        showChart(row_start, row_end,-1);
    }
    else if (e.keyCode == '39') {
        // right arrow
        for(let i=0; i < contents.length; i++) {
            let leters = contents[i].getElementsByTagName('div');
            for(let j=0; j < leters.length; j++) {
                randLetter = generateRandomLetter();
                contents[i].getElementsByTagName('div')[j].textContent = randLetter;
                contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
            }
        }
    }
    else if (e.keyCode == '38') {
        // up arrow
        for(let i=0; i < contents.length; i++) {
            let leters = contents[i].getElementsByTagName('div');
            for(let j=0; j < leters.length; j++) {
                randLetter = generateRandomE();
                contents[i].getElementsByTagName('div')[j].textContent = randLetter;
                contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
            }
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        for(let i=0; i < contents.length; i++) {
            let leters = contents[i].getElementsByTagName('div');
            for(let j=0; j < leters.length; j++) {
                randLetter = generateRandomC();
                contents[i].getElementsByTagName('div')[j].textContent = randLetter;
                contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
            }
        }
    }
    else if (e.keyCode == '37') {
        // left arrow
        for(let i=0; i < contents.length; i++) {
            let leters = contents[i].getElementsByTagName('div');
            for(let j=0; j < leters.length; j++) {
                randLetter = generateRandomSymbol();
                contents[i].getElementsByTagName('div')[j].textContent = randLetter;
                contents1[i].getElementsByTagName('div')[j].textContent = randLetter;
            }
        }
    }
    else if (e.keyCode == '17') {
        // ctrl
        for(let i=0; i < contents.length; i++) {
            let leters = contents[i].getElementsByTagName('div');
            for(let j=0; j < leters.length; j++) {
                randNumber = generateRandomNumer(9);
                contents[i].getElementsByTagName('div')[j].textContent = randNumber;
                contents1[i].getElementsByTagName('div')[j].textContent = randNumber;
            }
        }
    }
    else if (e.key == 'a') {
        for(let i=0; i < contents.length; i++) {
            contents[i].style.fontFamily = 'Eyechart';
            contents1[i].style.fontFamily = 'Eyechart';
        }
    }
    else if (e.key == 'z') {
        for(let i=0; i < contents.length; i++) {
            contents[i].style.fontFamily = 'Eyechart_Lea';
            contents1[i].style.fontFamily = 'Eyechart_Lea';
        }
    }
    else if (e.key == 's') {
        for(let i=0; i < contents.length; i++) {
            contents[i].style.fontFamily = 'SnellenMK';
            contents1[i].style.fontFamily = 'SnellenMK';
            if(flag) {
                // contents[i].style.fontSize = ((contents[i].style.fontSize.slice(0, -2) - 0) * 106/51 ) + 'px'; //diff in font size
                flag = false;
            }
        }
    }
    else if (e.key == 'x') {
        for(let i=0; i < contents.length; i++) {
            contents[i].style.fontFamily = 'OpticalK';
            contents1[i].style.fontFamily = 'OpticalK';
        }
    }
    
    else if (e.key == 'r') {
        if(!redgreen) {
            document.body.style.background = 'linear-gradient(to right,rgb(255, 0,0) 50%, rgb(0,255,0) 50%)';
            for(let i = 0; i<contents1.length; i++) {
                contents1[i].style.display = 'flex'
            }
            redgreen = true;
        } else {
            document.body.style.background = bg;
            for(let i = 0; i<contents1.length; i++) {
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
    let buttons = document.getElementsByTagName('button');
        for (let button of buttons) {
            // console.log(button[i].tabIndex);
            if (button.tabIndex == 0) {
                button.focus();
            }
        }
}

function render(h) {
    document.body.innerHTML ="";
    document.body.style.background = bg;
    let app = document.createElement("div");
    let grid = document.createElement("div");
    grid.setAttribute("role", "grid");
    grid.classList.add("grid");
    grid.setAttribute("data-wrap-cols", "true");
    app.id = "app";
    app.appendChild(grid);
    document.body.appendChild(app);
    let i, j, k=0;
    let fullscreen = document.createElement('button');
    fullscreen.id = 'fullscreen';
    fullscreen.setAttribute("tabindex", "-1");
    fullscreen.setAttribute('onclick','openFullscreen()');
    fullscreen.innerHTML = 'FullScreen';
    grid.appendChild(fullscreen);
    if(window.innerHeight == screen.height) {
        fullscreen.style.display = 'none';
    }
    for (i = 0; i < h; i++) {                       //((h == 3) ? 2 : 3) => if portrait 3 rows, if landscape 2 rows
        let row = document.createElement("div");
        row.classList.add("row");
        for (j = 0; j < ((h == col_num) ? row_num : col_num)&(k<list.length); j++) {  //((h == 3) ? 2 : 3) => if portrait 2 columns, if landscape 3 columns
            let gridcell = document.createElement("div");
            gridcell.classList.add("gridcell");
            gridcell.setAttribute("role", "gridcell");
            let div = document.createElement("button");
            div.setAttribute("onclick",list_fn[k])
            div.setAttribute("tabindex", "-1");
            div.innerHTML = list[k];
            gridcell.appendChild(div);
            row.appendChild(gridcell);
            k++;
        }
        grid.appendChild(row);
    }
    setTimeout(setFocus, 100);
    let chart = document.createElement('div');
    chart.id = 'chart';
    let back = document.createElement('button');
    back.classList.add("back");
    back.id = "back";
    back.setAttribute('onclick','back()');
    back.innerHTML = '⬅';    
    chart.appendChild(back);
    let msg = document.createElement('div');
    msg.innerHTML = 'It appears that this screen is not calibrated <br> Contact ';
    if (!localStorage.fontSize){
    chart.appendChild(msg);
    }
    for (let i = 0; i < row_size.length; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        let left_num = document.createElement("div");
        left_num.classList.add("left-num");
        left_num.innerHTML = '6/' + row_size[i];
        row.appendChild(left_num);
        let content = document.createElement("div");
        content.classList.add("content");
        if (localStorage.fontSize) {
            content.style.fontSize = localStorage.fontSize*row_size[i]/row_size[0] + 'px';
        } else {
            content.style.fontSize = 20 *row_size[i]/row_size[0] + 'px';
        }
        for (let content_val of content_vals[i]) {
            let letter = document.createElement("div");
            letter.innerHTML = content_val;
            content.appendChild(letter);
        }
        row.appendChild(content);
        let content1 = document.createElement("div");
        content1.classList.add("content1");
        if (localStorage.fontSize) {
            content1.style.fontSize = localStorage.fontSize *row_size[i]/row_size[0] + 'px';
        } else {
            content1.style.fontSize = 20 *row_size[i]/row_size[0] + 'px';
        }
        for (let content_val of content_vals[i]) {
            let letter = document.createElement("div");
            letter.innerHTML = content_val;
            content1.appendChild(letter);
        }
        row.appendChild(content1);
        let right_num = document.createElement("div");
        right_num.classList.add("right-num");
        right_num.innerHTML = '6/' + row_size[i];
        row.appendChild(right_num);
        chart.appendChild(row);
    }
    document.body.appendChild(chart);
    showChart(row_start, row_end,0);
    let picture = document.createElement('div');
    picture.id = 'picture';
    let back2 = document.createElement('button');
    back2.classList.add("back");
    back2.setAttribute('onclick','back()');
    back2.innerHTML = '⬅';    
    picture.appendChild(back2);
    let image = document.createElement('img');
    image.src = "splash_h.jpg";
    image.id = "logo";
    picture.appendChild(image);
    document.body.appendChild(picture);


    let chart1 = document.createElement('div');
    chart1.id = 'chart-log';
    let back1 = document.createElement('button');
    back1.classList.add("back");
    back1.id = "back1";
    back1.setAttribute('onclick','back()');
    back1.innerHTML = '⬅';    
    chart1.appendChild(back1);
    let msg1 = document.createElement('div');
    msg1.innerHTML = 'It appears that this screen is not calibrated <br> Contact ';
    if (!localStorage.fontSize){
    chart1.appendChild(msg1);
    }
    for (let i = 0; i < row_size.length; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        let left_num = document.createElement("div");
        left_num.classList.add("left-num1");
        left_num.innerHTML = '6/' + row_size[i];
        row.appendChild(left_num);
        let content = document.createElement("div");
        content.classList.add("content2");
        if (localStorage.fontSize) {
            content.style.fontSize = localStorage.fontSize*row_size[i]/row_size[0] + 'px';
        } else {
            content.style.fontSize = 20 *row_size[i]/row_size[0] + 'px';
        }
        for (let content_val of content_vals1[i]) {
            let letter = document.createElement("div");
            letter.innerHTML = content_val;
            content.appendChild(letter);
        }
        row.appendChild(content);
        let right_num = document.createElement("div");
        right_num.classList.add("right-num");
        right_num.innerHTML = '6/' + row_size[i];
        row.appendChild(right_num);
        chart1.appendChild(row);
    }
    document.body.appendChild(chart1);
}
