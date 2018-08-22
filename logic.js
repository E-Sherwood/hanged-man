function evaporate() {
    document.getElementById("start").innerHTML = "";
    document.getElementById("start2").innerHTML = "";
    document.getElementById("button1").innerText = "Good Luck";
    document.getElementById("button2").style.visibility = "visible";
}

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
    "Owlbear"
];

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

function matchImages() {
    if (rand === "Werewolf") {
        document.getElementById("wordImage").src = "assets/images/Werewolf-5e - Copy.png";
    }
    if (rand === "Owlbear") {
        document.getElementById("wordImage").src = "assets/images/Owlbear_ - Copy.jpg";
    }
    if (rand === "Weretiger") {
        document.getElementById("wordImage").src = "assets/images/Weretiger-5e - Copy.png";
    }
    if (rand === "Skeleton") {
        document.getElementById("wordImage").src = "assets/images/Skeleton-5e - Copy.jpg";
    }
    if (rand === "Pseudodragon") {
        document.getElementById("wordImage").src = "assets/images/Pseudodragon-5e - Copy.png";
    }
    if (rand === "Necromancer") {
        document.getElementById("wordImage").src = "assets/images/necromancer - Copy.jpg";
    }
    if (rand === "Manticore") {
        document.getElementById("wordImage").src = "assets/images/Manticore - Copy.jpg";
    }
    if (rand === "Elder Lich") {
        document.getElementById("wordImage").src = "assets/images/lich - Copy.jpg";
    }
    if (rand === "Kobold") {
        document.getElementById("wordImage").src = "assets/images/Kobold_ - Copy.jpg";
    }
    if (rand === "Iron Golem") {
        document.getElementById("wordImage").src = "assets/images/Iron_golem-5e - Copy.jpg";
    }
    if (rand === "Hell Hound") {
        document.getElementById("wordImage").src = "assets/images/Hell-hound-5e - Copy.png";
    }
    if (rand === "Griffon") {
        document.getElementById("wordImage").src = "assets/images/Griffon-5e - Copy.png";
    }
    if (rand === "Mind Flayer") {
        document.getElementById("wordImage").src = "assets/images/Mind_flayer - Copy.jpg";
    }
    if (rand === "Gnoll") {
        document.getElementById("wordImage").src = "assets/images/Gnoll-5e - Copy.png";
    }
    if (rand === "Giant Spider") {
        document.getElementById("wordImage").src = "assets/images/Giant_spider-5e - Copy.jpg";
    }
    if (rand === "Gelatinous Cube") {
        document.getElementById("wordImage").src = "assets/images/Gelatinous_Cube - Copy.jpg";
    }
    if (rand === "Air Elemental") {
        document.getElementById("wordImage").src = "assets/images/Air_elemental_5e - SIL.jpg";
    }
    if (rand === "Goblin") {
        document.getElementById("wordImage").src = "assets/images/goblin - Copy.jpg";
    }
    if (rand === "Dire Wolf") {
        document.getElementById("wordImage").src = "assets/images/dire-wolf - SIL.jpg";
    }
    if (rand === "Doppelganger") {
        document.getElementById("wordImage").src = "assets/images/Doppelganger-5e - Copy.jpg";
    }
};
function toggleHint() {
    var x = document.getElementById("wordImage");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }
}
//takes two clicks to show at first, but it works