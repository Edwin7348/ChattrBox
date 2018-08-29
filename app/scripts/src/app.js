
/*import socket from './ws-client';

//named import

import { ChatForm, ChatList } from './dom';


const FORM_SELECTOR = '[data-chat="chat-form"]';
const INPUT_SELECTOR = '[data-chat="message-input"]';
const LIST_SELECTOR = '[data-chat="message-list"]';

class ChatApp{
    constructor(){
        
        this.chatForm = new ChatForm(FORM_SELECTOR,INPUT_SELECTOR);
        this.chatList = new ChatList(LIST_SELECTOR, 'wonderwoman');


        socket.init('ws://localhost:3001');
        // in this callback, we are passing in this arror fucntion to be called when the logic of the true defintion is 
        // called aka  when socket.onopen   will call this arrow fucntion
        
        socket.registerOpenHandler(()=>{
            
            // i think that when init gets called, it goes to the true definnation first in ./dom
            // then is complete whatever the logic is has and when its time to use the callback peramiter that init accepts,
            // it will use this sides arrow function as the that callback function used on the other side
            // so the submit callback fun using in the true definintion is this arrrow function
            // which means that when submitCallback() is called in the true definition.
            // val is the same as this data variable and this is the logic tha val will go through
           this.chatForm.init((data)=>{
               // this arrow funtiion will be used when the form submit event is called
            let message = new ChatMessage(data);
            socket.sendMessage(message.serialize());

           });
            


        });

        socket.registerMessageHandler((data)=>{

            console.log(data);
            let message = new ChatMessage(data);
            this.chatList.drawMessage(message.serialize());

        });

    }

}

class ChatMessage {
    constructor({
      message: m,
      user: u = username,
      timestamp: t = (new Date()).getTime()
    }) {
      this.message = m;
      this.user = u;
      this.timestamp = t;
    }
    //returns a plain javaScript object with the info
    serialize() {
      return {
        user: this.user,
        message: this.message,
        timestamp: this.timestamp
      };
    }
  }
  

export default ChatApp;

*/

import socket from './ws-client';
import { UserStore } from './storage';
import { ChatForm, ChatList, promptForUsername } from './dom';

const FORM_SELECTOR = '[data-chat="chat-form"]';
const INPUT_SELECTOR = '[data-chat="message-input"]';
const LIST_SELECTOR = '[data-chat="message-list"]';

let userStore = new UserStore('x-chattrbox/u');
let username = userStore.get();
if (!username) {
  username = promptForUsername();
  userStore.set(username);
}


class ChatApp {
  constructor() {
    this.chatForm = new ChatForm(FORM_SELECTOR, INPUT_SELECTOR);
    this.chatList = new ChatList(LIST_SELECTOR, username);
    socket.init('ws://localhost:3001');
    socket.registerOpenHandler(() => {
      this.chatForm.init((text) => {
        let message = new ChatMessage({ message: text });
        socket.sendMessage(message.serialize());
      });
      this.chatList.init();
    });
    socket.registerMessageHandler((data) => {
      console.log(data);
      let message = new ChatMessage(data);
      this.chatList.drawMessage(message.serialize());
    });
  }
}

class ChatMessage {
  constructor({
    message: m,
    user: u = username,
    timestamp: t = (new Date()).getTime()
  }) {
    this.message = m;
    this.user = u;
    this.timestamp = t;
  }
  serialize() {
    return {
      user: this.user,
      message: this.message,
      timestamp: this.timestamp
    };
  }
}

export default ChatApp;
