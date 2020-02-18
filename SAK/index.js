// let plainText = "pleasetransferonemilliondollarstomyswissbankaccountsixtwotwo".toLocaleLowerCase();
// let key = "Megabuck".toLocaleLowerCase();
let plainText = "welcometofirstclassofnetworksecurity";
let key = "megabuck";

if (plainText.length % key.length != 0) {
  let t = plainText.length % key.length;
  for (let i = 1; i <= t; i++) {
    plainText += String.fromCharCode(i - 1 + 97);
  }
}

let cypherText;

let keyInArangeOrder = [];

splitText = plainText.split("");
console.log(splitText);
let cipherArray = [];
let i = 0,
  k = key.length;

let arr = [];
for (let m = 0; m < key.length; m++) {
  arr.push(key.charCodeAt(m));
}
function smallAlphabet() {
  //return alphabet of small value (key)

  let temp = Math.min(...arr);
  arr.splice(arr.indexOf(temp), 1);

  return String.fromCharCode(temp);
}

function keyPriority() {
  let temp;
  for (let i = 0; i < key.length; i++) {
    temp = smallAlphabet();
    keyInArangeOrder.push(temp);
  }
}

keyPriority(); //Getting key in arrange order;

console.log(keyInArangeOrder);

function convert_CypherText(char) {
  let index = key.indexOf(char);
  for (i; i < k; i++) {
    cipherArray[i] = splitText[index];
    index += key.length;
  }
  if (k < splitText.length) {
    k = k + 8;
  }
}

for (let j = 0; j < key.length; j++) {
  convert_CypherText(keyInArangeOrder[j]);
}

console.log("Me pagal hun: ", cipherArray.join(""));

// console.log(splitText.toString());
// console.log(splitText.join(""));
