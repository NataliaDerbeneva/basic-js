class VigenereCipheringMachine {
    constructor(){
      if(arguments.length==0 || (arguments.length!=0 && arguments[1]==true)) this.machine = "direct";
      else this.machine = "reverse";
    }
  
  
    encrypt() {
        if(arguments.length < 2 || typeof(arguments[0])=="undefined" || typeof(arguments[1])=="undefined") throw "Error";
  
        var message = arguments[0].toUpperCase();
        var len = message.length;
  
        var key = arguments[1].toUpperCase();
        var keylen = key.length;
  
        var encryptedMessage = "";
  
        var sdvig = 65;
        var alphabetLen = 26;
  
        var letter;
        var i=0;
        var letterCode;
        for(let j=0;j<len;j++){
           
            letter = message.charCodeAt(j);
            if(letter>64 && letter<91){
                letterCode = letter + key.charCodeAt(i%keylen) - 2*sdvig;
                encryptedMessage += String.fromCharCode(letterCode % alphabetLen + sdvig);
                i++;
            } else encryptedMessage += message[j];        
        }
  
        if(this.machine == "reverse"){
          let reversedencryptedMessage = "";
          for (let j=len-1; j>-1; j--){
            reversedencryptedMessage += encryptedMessage[j];
          }
          return reversedencryptedMessage;
        }
  
        return encryptedMessage;
    }
  
    decrypt() {
        if(arguments.length < 2 || typeof(arguments[0])=="undefined" || typeof(arguments[1])=="undefined") throw "Error";
  
        var encryptedMessage = arguments[0].toUpperCase();
        var len = encryptedMessage.length;
  
        var key = arguments[1].toUpperCase();
        var keylen = key.length;
  
        var message = "";
  
        var sdvig = 65;
        var alphabetLen = 26;
  
        var letter;
        var i=0;
        var letterCode;
        for(let j=0;j<len;j++){
             
          letter = encryptedMessage.charCodeAt(j);
          if(letter>64 && letter<91){
              letterCode = letter - key.charCodeAt(i%keylen);
              if(letterCode<0) letterCode += alphabetLen;
              message += String.fromCharCode(letterCode % alphabetLen + sdvig);
              i++;
          } else message += encryptedMessage[j];        
      }
  
      if(this.machine == "reverse"){
        let reversedmessage = "";
        for (let j=len-1; j>-1; j--){
          reversedmessage += message[j];
        }
        return reversedmessage;
      }
      
      return message;
  }
  }
  

module.exports = VigenereCipheringMachine;
