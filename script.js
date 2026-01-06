console.log("script started");

const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function encrypt() {
    console.log("encrypt");
    // get message value
    let msgValue = document.getElementById("messageInput").value;

    // get key value
    let keyValue = document.getElementById("key").value;

    // create empty result string
    let resultMessage = "";

    // loop thru msg characters
    for (let i = 0; i < msgValue.length; i++){
        // get current character (.charAt(i))
        let currentChar = msgValue.charAt(i);
        // convert to lowercase (.toLowerCase())
        currentChar = currentChar.toLowerCase();
        // convert to number (alpha.indexOf(currentChar))
        currentChar = alpha.indexOf(currentChar);
        console.log(currentChar);
        // apply formula

        // convert new character number into a character alpha[encryptedValue]

        // add encrypted character to a result string

        }
    // set encrypted message result text on screen

}

function decrypt() {
    console.log("decrypt");
}