
class ChatApp{
    constructor(){
        console.log('Hello es6!');

    }

}

class ChatMessage {

        constructor({message: m,user: u='batman',timestamp: t=(new Date()).getTime()})
         {
        this.user = user;
        this.message = message;
        this.timestamp = timestamp;
        }

    // this returns a plain javaAScript object with the info
     serialize(){
      return   {user: this.user,
        message: this.message,
        timestamp: this.timestamp
        };

        }
   }

export default ChatApp;
