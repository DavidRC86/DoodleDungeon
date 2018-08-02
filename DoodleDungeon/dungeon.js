var tileSet = document.createElement("img");
tileSet.src = "sheet.png";
var slider = document.getElementById("slider");
var sizeD = 0;
var count = document.getElementById("count");
setInterval(function() {
    sizeD = slider.value;

}, 100)

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

    var map = new ROT.Map.Digger(70, 70, { dugPercentage: sizeD });
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