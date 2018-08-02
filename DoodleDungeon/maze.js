var tileSet = document.createElement("img");
tileSet.src = "sheet.png";

var options = {
    layout: "tile",
    width: 70,
    height: 70,
    tileWidth: 8,
    tileHeight: 8,
    tileSet: tileSet,
    tileMap: {
        ".": [2, 2],
        "*": []
    },


}
var display = new ROT.Display(options);
document.body.appendChild(display.getContainer());

var generate = function() {

    var map = new ROT.Map.DividedMaze(70, 70);
    map.create(function(x, y, value) {
        display.draw(x, y, value ? "." : "*")
    });
}

tileSet.onload = generate;

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




var button = document.createElement("button");
button.setAttribute("id", "Dungeon");
button.innerHTML = "Dig";
button.onclick = generate;
document.body.appendChild(button);
document.getElementById("Dungeon").addEventListener("click", function(e) { updates(); });