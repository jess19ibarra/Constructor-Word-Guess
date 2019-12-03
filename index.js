var Word = require("./word.js");
var inquirer = require("inquirer");

var letter = "abcdefghijklmnopqrstuvwxyz";

var marvelCharacters = [
    "IRONMAN",
    "CAPTAIN AMERICA",
    "THOR",
    "SPIDER-MAN",
    "HULK",
    "BLACK WIDOW",
    "ANT-MAN",
    "LOKI",
    "BLACK PANTHER",
    "DEADPOOL"
];

var indexRandom = Math.floor(Math.random() * marvelCharacters.length);
var randomWord = marvelCharacters[indexRandom];

var computerWord = new word(randomWord);

var requireNew = false;

var incorrectLetters = [];
var correctLetters = [];
var guesses = 10;

function thisLogic() {
    if (requireNew) {
        var indexRandom = Math.floor(Math.random() * marvelCharacters.length);
        var randomWord = marvelCharacters[indexRandom];

        computerWord = new word(randomWord);

        requireNew = false;
    }

    var completeWord = [];

    if (completeWord.includes(false)) {
        inquirer.prompt([
            {
                type: "input",
                message: "Select letter from A to Z",
                name: "userinput"
            }
        ])
            .then(function (input) {
                if (
                    !letter.includes(input.user) || input.userinput.length > 1
                ) {
                    console.log("\nPlease try again!\n");
                    theLogic();
                } else {
                    if (
                        incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === ""
                    ) {
                        console.log("\nLetter Guessed or Nothing was Entered\n");
                    } else {
                        var wordCheckArray = [];

                        computerWord.userGuess(input.userinput);

                        computerWord.objArray.forEach(wordCheck);
                        if (wordCheckArray.join("") === completeWord.join("")) {
                            console.log("\nIncorrect|n");

                            incorrectLetters.push(input.userinput);
                            guesses--;
                        } else {
                            console.log("\nCorrect|n");

                            correctLetters.push(input.userinput);
                        }
                        Word();

                        console.log("Guesses Left: " + guesses + "\n");

                        console.log("Letters Guessed: " + incorrectLetters.join(" ") + "\n");

                        if (guesses > 0) {
                            theLogic();
                        } else {
                            console.log("You Lost!\n");
                        }
                        function wordCheck(key) {
                            wordCheckArray.push(key.guessed);
                        }
                    }
                }
            })
    } else {
        console.log("You won!\n");
    }
    function completeChck(key) {
        completeWord.push(key.guessed);
    }
}
function restardGame() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to:",
            choices: ["Play Again", "Exit"],
            name: "Restart"
        }
    ]).then(function (input) {
        if (input.restart === "Play Again") {
            requireNew = true;
            incorrectLetters = [];
            correctLetters = [];
            guesses = 10;
            theLogic();
        } else {
            return;
        }
    });
}
theLogic();



