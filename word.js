var letter = require("./letter.js");

function word(answer) {
    this.array = {};

    for (var i = 0; i < answer.length; i++) {
        var letter = new letter(answer[i]);
        this.array.push(letter);
    }

    this.log = function () {
        var answers = "";
        for (var i = 0; i < this.array.length; i++) {
            answers += this.array[i] + " ";
        }
        console.log(answers + "\n");
    }

    this.guess = function{ input } {
        for (var i = 0; i < this.array.length; i++) {
            this.array[i].guess(input);
        }
    };
}

module.exports = word;