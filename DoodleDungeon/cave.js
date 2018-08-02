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
        ".": [],
        "*": [2, 2],

    },


}

var display = new ROT.Display(options);
document.body.appendChild(display.getContainer());

var generate = function() {

    var map = new ROT.Map.Cellular(70, 70);
    map.randomize(0.55);
    map.create(function(x, y, value) {
        display.draw(x, y, value ? "." : "*")
    });
}
tileSet.onload = generate;



var button = document.createElement("button");
button.setAttribute("id", "Dungeon");
button.innerHTML = "Dig";
button.onclick = generate;
document.body.appendChild(button);
document.getElementById("Dungeon").addEventListener("click", function(e) { updates(); });