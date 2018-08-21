function evaporate() {
    document.getElementById("start").innerHTML = "";
    document.getElementById("start2").innerHTML = "";
    document.getElementById("button1").innerText = "Good Luck";
}
// onclick=evaporate()
var monstersArray = [
    "Doppelganger",
    "Dire Wolf",
    "Goblin",
    "Air Elemental",
    "Gelatinous Cube",
    "Giant Spider",
    "Gnoll",
    "Mind Flayer",
    "Griffon",
    "Hell Hound",
    "Iron Golem",
    "Kobold",
    "Elder Lich",
    "Manticore",
    "Necromancer",
    "Pseudodragon",
    "Skeleton",
    "Werewolf",
    "Weretiger",
    "Owlbear"];

var userText = document.getElementById("user-text");
var letter1 = document.getElementById("underline1");
document.onkeyup = function (event) {
    userText.textContent = event.key;
};
var rand = document.getElementById("chosenWord");

function chooseWord() {
    rand = monstersArray[Math.floor(Math.random() * monstersArray.length)];
    document.getElementById("chosenWord").innerHTML = rand;
    document.getElementById("underline1").innerHTML = rand[0];
    document.getElementById("underline2").innerHTML = rand[1];
    document.getElementById("underline3").innerHTML = rand[2];
    document.getElementById("underline4").innerHTML = rand[3];
    document.getElementById("underline5").innerHTML = rand[4];
    document.getElementById("underline6").innerHTML = rand[5];
    document.getElementById("underline7").innerHTML = rand[6];
    document.getElementById("underline8").innerHTML = rand[7];
    document.getElementById("underline9").innerHTML = rand[8];
    document.getElementById("underline10").innerHTML = rand[9];
    document.getElementById("underline11").innerHTML = rand[10];
    document.getElementById("underline12").innerHTML = rand[11];
    document.getElementById("underline13").innerHTML = rand[12];
    document.getElementById("underline14").innerHTML = rand[13];
    document.getElementById("underline15").innerHTML = rand[14];
//i'm not sure what goes here. some kind of loop?    

    
};