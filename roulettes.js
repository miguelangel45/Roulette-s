let itemsLength = 0;

readTextFileList("lists/lists.txt")

function spin(id) {
    console.log('spin', id);
    var rendertime = 0;
    var right = 0;
    readTextFile("lists/list"+(id+1)+".txt", id);
    var count = 0;
    var speed = 50;

    var timer = setInterval(function () {

        right += speed;
        count++;
        $("#lootbox-wrapper"+id).css('right', right + 'px');

        if (count >= 150) {
            speed = 30;
        }
        if (count >= 200) {
            speed = 20;
        }
        if (count >= 250) {
            speed = 10;
        }
        if (count >= 300) {
            speed = 5;
        }
        if (count >= 320) {
            speed = 4;
        }
        if (count >= 340) {
            speed = 3;
        }
        if (count >= 360) {
            speed = 2;
        }
        if (count >= 380) {
            speed = 1;
        }
        if (count >= 419) {
            clearInterval(timer);
            rendertime++;
            let lootItems = document.querySelectorAll('#loot-item'+id);
            if (lootItems.length > 50) {
                let itemToClone = lootItems[50];
                let clonedItem = itemToClone.cloneNode(true);
                document.getElementsByClassName('rewards')[0].append(clonedItem)
            }
        }
    }, 20)
}

/*$(function () {
    //$('#btn').on('click', spin)
})*/


/*var gold = '<div class="loot-item"><span class="gold">GOLD</span></div>';
var purple = '<div class="loot-item"><span class="purple">PURPLE</span></div>';
var blue = '<div class="loot-item"><span class="blue">BLUE</span></div>';
var green = '<div class="loot-item"><span class="green">GREEN</span></div>';*/


function render(items, id) {
    console.log('start render');
    $('#lootbox-wrapper'+id).empty();

    for (let i = 0; i < 100; i++) {
        if (items[Math.round((Math.random() * itemsLength))] !== undefined) {
            $('#lootbox-wrapper'+id).append('<div class="loot-item" id="loot-item'+id+'"><span class="green">' + items[Math.round((Math.random() * itemsLength))] + '</span></div>')
        }
    }

    /*for(var i=0;i<100;i++){
        var num = parseInt((Math.random()*100)+1);

        if(num >=1 && num <=5){ // 5%
            $('.lootbox-wrapper').append(gold);
        }else if(num >=6 && num <=15){ // 10%
            $('.lootbox-wrapper').append(purple);
        }else if(num >=16 && num <=35){ // 20%
            $('.lootbox-wrapper').append(blue);
        }else if(num >=36 && num <=100){ // 65%
            $('.lootbox-wrapper').append(green);
        }
    }*/
    console.log('finish');
}

let renderRoulettes = (items) => {
    console.log('render roulettes');
    for (let i = 0; i < items.length; i++) {
        let lootbox = document.createElement('div');
        lootbox.className = 'lootbox';
        let lootboxContainer = document.createElement('div');
        lootboxContainer.className = 'lootbox-container';
        let lootboxWrappper = document.createElement('div');
        lootboxWrappper.className = 'lootbox-wrapper';
        lootboxWrappper.id = 'lootbox-wrapper'+i;
        let lootMarker = document.createElement('div');
        lootMarker.className = 'loot-marker';
        lootMarker.id = 'loot-marker'+i;
        lootboxContainer.append(lootMarker);
        lootboxContainer.append(lootboxWrappper);
        lootbox.append(lootboxContainer)
        document.body.append(lootbox);
        setTimeout(()=>spin(i),1000)

    }
}


function readTextFile(file, id) {
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                let allText = rawFile.responseText;
                let items = allText.split(',');
                itemsLength = items.length;
                render(items, id)
            }
        }
    };
    rawFile.send(null);
}

function readTextFileList(file) {
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                let allText = rawFile.responseText;
                let items = allText.split(',');
                document.onreadystatechange = function () {
                    renderRoulettes(items)
                }
            }
        }
    };
    rawFile.send(null);
}

