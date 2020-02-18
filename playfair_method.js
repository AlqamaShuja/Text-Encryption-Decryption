// text = "My Attitude is Fair".toLocaleLowerCase();
// key22 = "shery".split("");
let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let ignoreAlphabet = "j";
let matrix = new Array(5);
let alphabetInMatrixForm = [];

//remove character from alphabet and key. (avoid repetation)
function removeCharacter() {
  let temp,
    count = 0;
  for (let i = 0; i < key22.length; ) {
    temp = key22[i];
    key22 = key22.filter(item => item != temp);
    alphabet = alphabet.filter(alph => alph != temp);
    alphabetInMatrixForm[count] = temp;
    count++;
  }

  alphabet = alphabet.filter(alph => alph != ignoreAlphabet);
  alphabetInMatrixForm = alphabetInMatrixForm.concat(alphabet);
}

function createMatrix() {
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = [];
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      matrix[i][j] = alphabetInMatrixForm[count];
      count++;
    }
  }
}

//insert 'x' between 2 same character
function create_PF_plainText() {
  let temp1,
    temp2,
    newText = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) == 32) {
      newText += String.fromCharCode(32);
    } else {
      temp1 = text[i];
      temp2 = text[i + 1];
      if (temp1 == temp2) {
        newText += temp1;
        newText += "x";
      } else {
        newText += temp1;
      }
    }
  }
  text = newText;
}

function playFair_Encryption() {
  removeCharacter();
  createMatrix();
  create_PF_plainText();

  for (let i = 0; i < text.length; ) {
    if (text.charCodeAt(i) == 32) {
      encryptedText += String.fromCharCode(32);
      i++;
    } else {
      let temp1, temp2, temp1_r, temp2_r, temp1_c, temp2_c;

      if (text[i] != (null || undefined)) {
        temp1 = text[i];
      } else {
        return;
      }

      if (text[i + 1] != (null || undefined)) {
        temp2 = text[i + 1];
        if (temp2.charCodeAt(0) == 32) {
          temp2 = "x";
        }
      } else {
        temp2 = "x";
      }

      for (let k = 0; k < 5; k++) {
        for (let j = 0; j < 5; j++) {
          if (matrix[k][j] == temp1) {
            temp1_r = k;
            temp1_c = j;
          }
          if (matrix[k][j] == temp2) {
            temp2_r = k;
            temp2_c = j;
          }
        }
      }

      //if both alphabet are in same column
      if (temp1_c == temp2_c) {
        if (matrix[temp1_r + 1] == (null || undefined)) {
          encryptedText += matrix[0][temp1_c];
          encryptedText += matrix[temp2_r + 1][temp1_c];
        } else if (matrix[temp2_r + 1] == (null || undefined)) {
          encryptedText += matrix[temp1_r + 1][temp1_c];
          encryptedText += matrix[0][temp1_c];
        } else {
          encryptedText += matrix[temp1_r + 1][temp1_c];
          encryptedText += matrix[temp2_r + 1][temp1_c];
        }
      } //if both alphabet are in same rows
      else if (temp1_r == temp2_r) {
        if (matrix[temp1_c + 1] == undefined) {
          encryptedText += matrix[temp1_r][0];
          encryptedText += matrix[temp2_r][temp2_c + 1];
        } else if (matrix[temp2_c + 1] == undefined) {
          encryptedText += matrix[temp1_r][temp1_c + 1];
          encryptedText += matrix[temp2_r][0];
        } else {
          encryptedText += matrix[temp1_r][temp1_c + 1];
          encryptedText += matrix[temp2_r][temp2_c + 1];
        }
      } //if both alphabet are in diagonal
      else {
        // encryptedText += matrix[temp2_c][temp1_r];
        // encryptedText += matrix[temp1_c][temp2_r];
        encryptedText += matrix[temp1_r][temp2_c];
        encryptedText += matrix[temp2_r][temp1_c];
      }
      i = i + 2;
    }
  }
  showEncryptedTextInBrowser();
}

// function playFair_Decryption() {

// }

// playFair_Encryption();
