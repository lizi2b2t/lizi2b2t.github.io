function changeColor(){

var color="#f00|#0f0|#00f|#880|#808|#088|yellow|green|blue|gray";

color=color.split("|");

document.getElementByTag("h3").style.color=color[parseInt(Math.random() * 

color.length)];

}

setInterval("changeColor()",200);
