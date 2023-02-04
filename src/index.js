const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const arr = expr.split("**********");
  const phrase = [];

  for (let i = 0; i < arr.length; i++) {
    const letters = [];
    const currentArr = arr[i].split("");

    while (currentArr.length) {
      letters.push(+currentArr.splice(0, 10).join(""));
    }
    // console.log(letters) // ------------------------------ текущее слово (массив цифр)
    const morzeWord = []; // массив, сюда пушить букву (в виде морзе)

    for (let i = 0; i < letters.length; i++) {
      let letterAsMorthe;
      let letterAsMortheCombine = [];

      if (letters[i].toString().length === 2) {
        letters[i] === 10 ? morzeWord.push(".") : morzeWord.push("-");
      }
      if (letters[i].toString().length > 2) {
        const currentLetterAsArray = letters[i].toString().split("");
        while (currentLetterAsArray.length) {
          +currentLetterAsArray.splice(0, 2).join("") === 10
            ? letterAsMortheCombine.push(".")
            : letterAsMortheCombine.push("-");
        }
        morzeWord.push(letterAsMortheCombine.join(""));
      }
    }
    phrase.push(morzeWord.map((letter) => MORSE_TABLE[letter]).join(""));
  }

  return phrase.join(" ");
}

module.exports = {
  decode,
};
