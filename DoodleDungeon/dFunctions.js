function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var monsters = ["mook", "minion", "elite minion", "mini-boss", "boss"];
var moncount = [];

var getmonsters = function() {
    monsters.forEach(function(element) {
        var count = 0;
        if (element == "boss") {
            count = getRandomInt(2) + 1;
        } else {
            count = getRandomInt(10) + 1;
        }
        var out = count + " " + element + " ";
        moncount.push(out);
    });
}

var listmons = function() {
    var id = document.querySelector("#list");
    for (var i = 0; i < moncount.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = moncount[i];
        id.appendChild(newDiv);
    }
}


var updatemons = function() {

    moncount = [];
    monsters.forEach(function(element) {
        var count = 0;
        if (element == "boss") {
            count = getRandomInt(2) + 1;
        } else {
            count = getRandomInt(10) + 1;
        }
        var out = count + " " + element + " ";
        moncount.push(out);
    });
}

var clear = function() {
    var divclear = document.getElementById('list');
    while (divclear.firstChild) {
        divclear.removeChild(divclear.firstChild);
    }
}
getmonsters();
listmons();
var updates = function() {
    clear();
    updatemons();
    listmons();

}