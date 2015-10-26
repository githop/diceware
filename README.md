# diceware

This is a fun JS side project I decided to make after reading an article about Diceware on ArsTechnica.

Diceware is a method to generate a secure password using a list of words and dice.
Each word on the list corresponds with a 5 digit number, ranging from 11111 - 66666. 

To generate a word for a pass phrase, you simply roll a standard die 5 times, then use this number
to select a word from the list.

This process is repeated to generate the words in the pass phrase.

P.S. JavaScript does not do a good job generating random numbers, do not use this to generate actual passwords.
