console.log("script started");

const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function encrypt() {
    console.log("encrypt");
    // get message value
    let msgValue = document.getElementById("messageInput").value;

    // get key value
    let keyValue = parseInt(document.getElementById("key").value);

    // create empty result string
    let resultMessage = "";

    let resultBox = document.getElementById("result");

    // loop thru msg characters
    for (let i = 0; i < msgValue.length; i++){
        // get current character (.charAt(i))
        let currentChar = msgValue.charAt(i);
        // convert to lowercase (.toLowerCase())
        currentChar = currentChar.toLowerCase();
        // convert to number (alpha.indexOf(currentChar))
        currentChar = alpha.indexOf(currentChar);
        // apply formula
        currentChar = (currentChar + keyValue) % 26;
        // convert new character number into a character alpha[encryptedValue]
        currentChar = alpha[currentChar];
        // add encrypted character to a result string
        resultMessage += currentChar;
        console.log(resultMessage);
        }
    // set encrypted message result text on screen
    resultBox.value = resultMessage;
}

function decrypt() {
    console.log("decrypt");
    // get message value
    let msgValue = document.getElementById("messageInput").value;

    // get key value
    let keyValue = parseInt(document.getElementById("key").value);

    // create empty result string
    let resultMessage = "";

    let resultBox = document.getElementById("result");

    // loop thru msg characters
    for (let i = 0; i < msgValue.length; i++){
        // get current character (.charAt(i))
        let currentChar = msgValue.charAt(i);
        // convert to lowercase (.toLowerCase())
        currentChar = currentChar.toLowerCase();
        // convert to number (alpha.indexOf(currentChar))
        currentChar = alpha.indexOf(currentChar);
        // apply formula
        currentChar = (currentChar - keyValue) % 26;
        // convert new character number into a character alpha[encryptedValue]
        currentChar = alpha[currentChar];
        // add encrypted character to a result string
        resultMessage += currentChar;
        }
    // set encrypted message result text on screen
    resultBox.value = resultMessage;
}