let vig_key = "";

function vigenere_cipher_encryption() {
  encryptedText = "";
  let temp,
    tempKey = vig_key.repeat(text.length);
  console.log("temp key: ", tempKey);
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) == 32) {
      encryptedText += String.fromCharCode(32);
    } else {
      temp = text.charCodeAt(i) - 97 + tempKey.charCodeAt(i) - 97;
      temp = temp % 25;
      encryptedText += String.fromCharCode(temp + 97);
    }
  }
  document.getElementById("outputCiphers").innerHTML = encryptedText;
}

function vigenere_cipher_decryption() {
  decryptedText = "";
  let temp,
    tempKey = vig_key.repeat(text.length);

  for (let i = 0; i < encryptedText.length; i++) {
    if (encryptedText.charCodeAt(i) == 32) {
      decryptedText += String.fromCharCode(32);
    } else {
      temp = encryptedText.charCodeAt(i) - 97 - (tempKey.charCodeAt(i) - 97);
      if (temp < 0) {
        temp = temp + 25;
        decryptedText += String.fromCharCode(temp + 97);
      } else {
        decryptedText += String.fromCharCode(temp + 97);
      }
    }
  }
  document.getElementById("outputDecrypted").innerHTML = decryptedText;
}
