# cs4-caesar-cipher

## Learning Target

I am learning how to write a program to automate encryption and decryption using the Caesar Cipher

## Success Criteria

- I can write and use Caesar Cipher formulas to encrypt and decrypt messages
- I can decompose the Caesar Cipher algorithm into functions
- I can implement the Caesar Cipher algorithm using JavaScript

## Directions
Setup the project and then implement the functionality so that when the encrypt button is clicked, the user's text is encrypted using the key and when the decrypt button is pressed, the user's text is decrypted using the key

## Hints
- Define an array that holds each the alphabet in lowercase
- Define ```encrypt``` and ```decrypt``` functions and add ```onclick``` attributes to the buttons to call the functions
- Use ```document.getElementById()``` to get the text area value
- Use a for loop and ```.charAt()``` to get each character in the user's text
- Encrypt formula is ```(x + k) % 26```, decrypt formula is ```(x - k) % 26```, use an if statement to check if the value is negative and add ```26```
- Use ```.toLowerCase()``` to ensure messages are all lowercase
