let text = "";
let decryptedText = "";
let encryptedText = "";
let cipher_method;

let plainTxt = document.getElementById("plainTxt");
let key = 1;
let key22; //key for playfair

disableInput();

function disableInput() {
  if (cipher_method == null || cipher_method == "substitution_cipher") {
    document.getElementById("key").disabled = true;
  } else {
    document.getElementById("key").disabled = false;
  }
}

plainTxt.addEventListener("change", function(e) {
  text = e.target.value.toLocaleLowerCase();
});

document.getElementById("key").addEventListener("change", function(e) {
  if (cipher_method == "simple_cipher") {
    key = parseInt(e.target.value);
    if (key % 25 == 0) {
      key = key + 1;
    }
  } else if (cipher_method == "vigenere_cipher") {
    vig_key = e.target.value.toLocaleLowerCase();
  } else if (cipher_method == "playFair_method") {
    key22 = e.target.value.toLocaleLowerCase().split("");
    console.log("playFair_method Key: ", key22); //show key
  }
});

document.getElementById("method").addEventListener("change", function(e) {
  cipher_method = document.getElementById("method").value;
  disableInput();
});

function showEncryptedTextInBrowser() {
  document.getElementById("outputCiphers").innerHTML = encryptedText;
}

function showDecryptedTextInBrowser() {
  document.getElementById("outputDecrypted").innerHTML = decryptedText;
}

function encryption() {
  encryptedText = "";
  let temp;
  // if (key !== NaN) {
  //   console.log("Pagaaaaaaalll");
  //   temp = "Please Input Integer Key.";
  //   document.getElementById("keyError").innerHTML = temp;
  //   return;
  // }
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) == 32) {
      encryptedText += String.fromCharCode(32);
    } else {
      temp = text.charCodeAt(i) - 97 + key;
      temp = temp % 25;
      if (temp < 0) {
        temp = temp + 25;
      }
      encryptedText += String.fromCharCode(temp + 97);
    }
  }
  showEncryptedTextInBrowser();
}

function decryption() {
  decryptedText = "";
  let temp = "";
  for (let i = 0; i < encryptedText.length; i++) {
    if (encryptedText.charCodeAt(i) == 32) {
      decryptedText += String.fromCharCode(32);
    } else {
      temp = encryptedText.charCodeAt(i) - 97 - key;
      temp = temp % 25;
      if (temp < 0) {
        temp = temp + 25;
      }
      decryptedText += String.fromCharCode(temp + 97);
    }
  }
  showDecryptedTextInBrowser();
}

function textEncryption() {
  if (cipher_method == "simple_cipher") {
    encryption();
  } else if (cipher_method == "vigenere_cipher") {
    vigenere_cipher_encryption();
  } else if (cipher_method == "substitution_cipher") {
    substitute_encryption();
  } else if (cipher_method == "playFair_method") {
    playFair_Encryption();
  }
}

function textDecryption() {
  if (cipher_method == "simple_cipher") {
    decryption();
  } else if (cipher_method == "vigenere_cipher") {
    vigenere_cipher_decryption();
  } else if (cipher_method == "substitution_cipher") {
    substitute_decryption();
  } else if (cipher_method == "playFair_method") {
    playFair_decryption();
  }
}
