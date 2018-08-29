
/*import $ from 'jquery';

// because we us Browserify, it automatocial builds our js dependencies into your app bundle ot be used in our browser
// due to this, browserify will handle the rest of the job importing jquery

//Es6 class
// this handles the outgoing chat messages
export class ChatForm{
    // constuctors sole job is to set properties for an instance
    constructor(formSel, inputSel) {
        this.$form = $(formSel);
        this.$input = $(inputSel);
      }


// this method will associate a callback with the forms submit event
//passing in a function
init(submitCallback){

    // uses a arrow function to handle the event
    this.$form.submit((event)=> {

        event.preventDefault();

        // retrieve the value from the  input field
        let val = this.$input.val();

        // pass the val into this function
        submitCallback(val);
        //we reset the val
        this.$input.val('');
    });

    // this will make sure the form submits when the button is clicked
    // we add a click handler  that will fire the event based on a button being clicked
    this.$form.find('button').on('click',()=> this.$form.submit());
}


}//end of class def


export class ChatList {
    constructor(listSel, username) {
    this.$list = $(listSel);
    this.username = username;
    }
    drawMessage({user: u, timestamp: t, message: m}) {
    let $messageRow = $('<li>', {
    'class': 'message-row'
    });
    if (this.username === u) {
    $messageRow.addClass('me');
    }
    let $message = $('<p>');
    $message.append($('<span>', {
    'class': 'message-username',
    text: u
    }));
    $message.append($('<span>', {
    'class': 'timestamp',
    'data-time': t,
    text: (new Date(t)).getTime()
    }));
    $message.append($('<span>', {
    'class': 'message-message',
    text: m
    }));
    $messageRow.append($message);
    $(this.listId).append($messageRow);
    $messageRow.get(0).scrollIntoView();
    }
   }

   */
import $ from 'jquery';
import md5 from 'crypto-js/md5';
import moment from 'moment';

function createGravatarUrl(username) {
  let userhash = md5(username);
  return `http://www.gravatar.com/avatar/${userhash.toString()}`;
}

export function promptForUsername() {
  let username = prompt('Enter a username');
  return username.toLowerCase();
}

export class ChatForm {
  constructor(formSel, inputSel) {
    this.$form = $(formSel);
    this.$input = $(inputSel);
  }

  init(submitCallback) {
    this.$form.submit((event) => {
      event.preventDefault();
      let val = this.$input.val();
      submitCallback(val);
      this.$input.val('');
    });

    this.$form.find('button').on('click', () => this.$form.submit());
  }
}

export class ChatList {
  constructor(listSel, username) {
    this.$list = $(listSel);
    this.username = username;
  }

  drawMessage({user: u, timestamp: t, message: m}) {
    let $messageRow = $('<li>', {
      'class': 'message-row'
    });

    if (this.username === u) {
      $messageRow.addClass('me');
    }

    let $message = $('<p>');

    $message.append($('<span>', {
      'class': 'message-username',
      text: u
    }));

    $message.append($('<span>', {
      'class': 'timestamp',
      'data-time': t,
      text: moment(t).fromNow()
    }));

    $message.append($('<span>', {
      'class': 'message-message',
      text: m
    }));

    let $img = $('<img>', {
      src: createGravatarUrl(u),
      title: u
    });

    $messageRow.append($img);
    $messageRow.append($message);
    this.$list.append($messageRow);
    $messageRow.get(0).scrollIntoView();
  }

  init() {
    this.timer = setInterval(() => {
      $('[data-time]').each((idx, element) => {
        let $element = $(element);
        let timestamp = new Date().setTime($element.attr('data-time'));
        let ago = moment(timestamp).fromNow();
        $element.html(ago);
      });
    }, 1000);
  }
}
