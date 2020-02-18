// let text = "Saeed jani che bna rha he".toLocaleLowerCase();
encryptedText = "";
decryptedText = "";

let substitute = {
  a: "m",
  b: "c",
  c: "f",
  d: "i",
  e: "q",
  f: "n",
  g: "a",
  h: "x",
  i: "h",
  j: "v",
  k: "z",
  l: "k",
  m: "o",
  n: "w",
  o: "b",
  p: "l",
  q: "e",
  r: "j",
  s: "d",
  t: "g",
  u: "t",
  v: "p",
  w: "y",
  x: "u",
  y: "s",
  z: "r"
};

function substitute_encryption() {
  let temp;
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) == 32) {
      encryptedText += String.fromCharCode(32);
    } else {
      temp = text[i];
      encryptedText += substitute[temp];
    }
  }
  // console.log(encryptedText);
  showEncryptedTextInBrowser();
}

function substitute_decryption() {
  let temp;
  for (let i = 0; i < encryptedText.length; i++) {
    if (encryptedText.charCodeAt(i) == 32) {
      decryptedText += String.fromCharCode(32);
    } else {
      temp = encryptedText[i];
      decryptedText += Object.keys(substitute)[
        Object.values(substitute).indexOf(temp)
      ];
    }
  }
  // console.log("decryption: ", decryptedText);
  showDecryptedTextInBrowser();
}
