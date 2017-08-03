'use strict'

var gameRunning = false;
var resultEntryAllowed = false;
var correctGuesses = 0;
var totalGuesses = 0;

var catIndex = 0;
var catName;
var catImages = [
    "20% Cooler Octocat.png",
    "Adventure Cat.png",
    "Agendacat.png",
    "Andycat.jpg",
    "Baracktocat.jpg",
    "Bear Cavalry.png",
    "Benevocats.png",
    "Benjamin Bannekat.png",
    "Bewitchedtocat.jpg",
    "Blinktocat, Pinktocat, Inktocat, and Clyde.jpg",
    "Bouncer.png",
    "Carlostocat.gif",
    "Catstello.png",
    "Chellocat.jpg",
    "Cherryontop-o-cat.png",
    "Class Act.png",
    "Cloud.jpg",
    "Codercat.jpg",
    "Collabocats.jpg",
    "Constructocat.jpg",
    "Daftpunktocat-Guy.gif",
    "Daftpunktocat-Thomas.gif",
    "Deckfailcat.png",
    "Defunktocat.png",
    "Dinotocat.png",
    "Doctocat Brown.jpg",
    "Dodge, Duck, Dip, Dive, Dodgetocat.jpg",
    "Dodgetocat v2.png",
    "Dojocat.jpg",
    "Dr.Octocat.png",
    "Droidtocat.png",
    "Drunktocat.jpg",
    "Drupalcat.jpg",
    "Dunetocat.png",
    "Electrocat.png",
    "Father Timeout.jpg",
    "Femalecodertocat.png",
    "Filmtocat.png",
    "Forktocat.jpg",
    "Founding Father v2.png",
    "Founding Father.jpg",
    "Front-End Conftocat.png",
    "Gangnamtocat.png",
    "Gobble-o-tron.gif",
    "Gracehoppertocat.jpg",
    "Grim Repo.jpg",
    "Grinchtocat.gif",
    "Hanukkat.png",
    "Heisencat.png",
    "Hipster Partycat.jpg",
    "Homercat.png",
    "Hubot.jpg",
    "Inflatocat.png",
    "Inspectocat.jpg",
    "IronCat.jpg",
    "Jean-Luc Picat.jpg",
    "Jenktocat.jpg",
    "Jetpacktocat.png",
    "Kimonotocat.png",
    "Labtocat.png",
    "Linktocat.jpg",
    "Luchadortocat.png",
    "Mardigrastocat.png",
    "Maxtocat.gif",
    "McEfeeline.jpg",
    "Megacat v2.png",
    "Megacat.jpg",
    "Minertocat.png",
    "Minion.png",
    "Momtocat.png",
    "Monroe.jpg",
    "Motherhubbertocat.png",
    "Mountietocat.png",
    "Mummytocat.gif",
    "Murakamicat.png",
    "Nemesis.png",
    "Not Octocat.jpg",
    "Nyantocat.gif",
    "Octdrey Catburn.jpg",
    "OctoLiberty.png",
    "Octobi Wan Catnobi.jpg",
    "Octocat De Los Muertos.jpg",
    "Octoclark Kentocat.jpg",
    "Octofez.png",
    "Octonaut.jpg",
    "Octotron.jpg",
    "Okal-Eltocat.jpg",
    "Oktobercat.png",
    "Ordered Listocat.png",
    "Original.png",
    "Plumber.jpg",
    "Poptocat v2.png",
    "Poptocat.png",
    "Private Investocat.jpg",
    "Puppeteer.png",
    "Pusheencat.png",
    "Pythocat.png",
    "Red Polo.png",
    "Repo.png",
    "Riddlocat.png",
    "Robotocat.png",
    "Saint Nicktocat.jpg",
    "Saketocat.png",
    "Saritocat.png",
    "Scarletteocat.jpg",
    "Scottocat.jpg",
    "Setuptocat.jpg",
    "Shoptocat.png",
    "Skatetocat.png",
    "Skitchtocat.png",
    "Snow Octocat.png",
    "Socialite.jpg",
    "Spectrocat.png",
    "Spidertocat.png",
    "Spocktocat.png",
    "Steroidtocat.png",
    "Stormtroopocat.png",
    "Strongbadtocat.png",
    "Supportcat.png",
    "Swagtocat.png",
    "Thanktocat.png",
    "Topguntocat.png",
    "Total Eclipse of the Octocat.jpg",
    "Trekkie.png",
    "Visionary.jpg",
    "Welcometocat.png",
    "Where's Waldocat.png",
    "Wilson.jpg",
    "X-tocat.jpg",
    "Yaktocat.png",
    "goretocat.png",
    "professortocat_v2.png",
]

$(document).ready(function() {
    $("#game-holder").hide();
    $("#begin-game").click(beginGame);
    $(document).keypress(function(e) {
        if (!gameRunning)
            return;

        switch (e.originalEvent.key) {
        case ' ':
            $("#octocat-name").html(catName);
            resultEntryAllowed = true;
            break;
        case 'y':
            if (resultEntryAllowed) {
                correctGuesses++;
                totalGuesses++;
                loadNextOctocat();
            }
            break;
        case 'n':
            if (resultEntryAllowed) {
                totalGuesses++;
                loadNextOctocat();
            }
            break;
        }
    });
});

function loadNextOctocat() {
    resultEntryAllowed = false;

    $("#progress").html(correctGuesses + "/" + totalGuesses);

    if (catIndex >= catImages.length) {
        endGame();
    } else {
        $("#octocat-image").attr("src", "cats/" + catImages[catIndex]);
        catName = catImages[catIndex].replace(/\.(png|jpg|gif)/, '');

        $("#octocat-name").html(catName.replace(/./g, '&nbsp;'));
        catIndex++;
    }
}

function endGame() {
    gameRunning = false;
    var percentScore = Math.round((correctGuesses / totalGuesses) * 100);
    $("#result-holder").html("Final Score: " + correctGuesses + "/" + totalGuesses + " (" + percentScore + "%)");
}

function beginGame() {
    shuffle(catImages);
    loadNextOctocat();
    gameRunning = true;

    $("#splash-holder").hide();
    $("#game-holder").show();
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
