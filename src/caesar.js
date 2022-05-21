// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift > 25 || shift < -25){
      return false 
    }
    if (!encode) shift *= -1;

    //changing entered test to lowercase
    let message = input.toLowerCase();
    // establishing an open string 
    let final = "";

    //start of the for loop 
    for (let i=0; i < message.length ; i++) {
      let letter = message[i];
      //first got to match the letters to the alphabet 
      if( letter.match(/[a-z]/)){
        // adding the shift variable 
        let code = message.charCodeAt(i) + shift;
        // shifting code it the number is greater than 122
        if (code > 122){
          code = code - 26;
        }
        // shifting code if the code is less that 97
        if (code < 97){
          code = code + 26;
        }
        let newLetter = String.fromCharCode(code);
        final += newLetter;
      } else {
        final += letter;
      }
    }
    console.log(final);
    return final
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
