import * as Redux from 'redux';
import { AppState } from '../app.reducer';
import { getAllMessages } from '../thread/thread.reducer';
import { uuid } from '../util/uuid';
import * as moment from 'moment';
import { Thread } from '../thread/thread.model';
import * as ThreadActions from '../thread/thread.actions';
import { User } from '../user/user.model';
import * as UserActions from '../user/user.actions';

/**
 * ChatExampleData sets up the initial data for our chats as well as
 * configuring the "bots".
 */

// the person using the app is Juliet
const me: User = {
  id: uuid(),
  isClient: true, // <-- notice we're specifying the client as this User
  name: 'Pecka',
  avatarSrc: 'assets/images/avatars/pecka.jpg'
};

const ladycap: User = {
  id: uuid(),
  name: 'Lady Mili',
  avatarSrc: 'assets/images/avatars/mili.jpg'
};

const echo: User = {
  id: uuid(),
  name: 'Haci Echo Bot',
  avatarSrc: 'assets/images/avatars/haci.jpg'
};

const rev: User = {
  id: uuid(),
  name: 'Kenny Reverse Bot',
  avatarSrc: 'assets/images/avatars/keni.jpg'
};

const wait: User = {
  id: uuid(),
  name: 'Taki Waiting Bot',
  avatarSrc: 'assets/images/avatars/taki.jpg'
};

const tLadycap: Thread = {
  id: 'tLadycap',
  name: ladycap.name,
  avatarSrc: ladycap.avatarSrc,
  messages: []
};

const tEcho: Thread = {
  id: 'tEcho',
  name: echo.name,
  avatarSrc: echo.avatarSrc,
  messages: []
};

const tRev: Thread = {
  id: 'tRev',
  name: rev.name,
  avatarSrc: rev.avatarSrc,
  messages: []
};

const tWait: Thread = {
  id: 'tWait',
  name: wait.name,
  avatarSrc: wait.avatarSrc,
  messages: []
};

export function ChatExampleData(store: Redux.Store<AppState>) {

  // set the current User
  store.dispatch(UserActions.setCurrentUser(me));

  // create a new thread and add messages
  store.dispatch(ThreadActions.addThread(tLadycap));
  store.dispatch(ThreadActions.addMessage(tLadycap, {
    author: me,
    sentAt: moment().subtract(45, 'minutes').toDate(),
    text: 'Yet let me weep for such a feeling loss.'
  }));
  store.dispatch(ThreadActions.addMessage(tLadycap, {
    author: ladycap,
    sentAt: moment().subtract(20, 'minutes').toDate(),
    text: 'So shall you feel the loss, but not the friend which you weep for.'
  }));

  // create a few more threads
  store.dispatch(ThreadActions.addThread(tEcho));
  store.dispatch(ThreadActions.addMessage(tEcho, {
    author: echo,
    sentAt: moment().subtract(1, 'minutes').toDate(),
    text: 'I\'ll echo whatever you send me'
  }));

  store.dispatch(ThreadActions.addThread(tRev));
  store.dispatch(ThreadActions.addMessage(tRev, {
    author: rev,
    sentAt: moment().subtract(3, 'minutes').toDate(),
    text: 'I\'ll reverse whatever you send me'
  }));

  store.dispatch(ThreadActions.addThread(tWait));
  store.dispatch(ThreadActions.addMessage(tWait, {
    author: wait,
    sentAt: moment().subtract(4, 'minutes').toDate(),
    text: `I\'ll wait however many seconds you send to me before responding.` +
      ` Try sending '3'`
  }));

  // select the first thread
  store.dispatch(ThreadActions.selectThread(tLadycap));

  // Now we set up the "bots". We do this by watching for new messages and
  // depending on which thread the message was sent to, the bot will respond
  // in kind.

  const handledMessages: string[] = [];

  store.subscribe( () => {
    let allMessages = getAllMessages(store.getState());
    let myMessages = getAllMessages(store.getState())
    .filter((message: any) => message.author.id === me.id)

    getAllMessages(store.getState())
      // bots only respond to messages sent by the user, so
      // only keep messages sent by the current user
      .filter((message: any) => message.author.id === me.id)
      .map((message: any) => {
        // This is a bit of a hack and we're stretching the limits of a faux
        // chat app. Every time there is a new message, we only want to keep the
        // new ones. This is a case where some sort of queue would be a better
        // model
        const isMessageHandled = handledMessages.indexOf(message.id) >= 0;
        if (isMessageHandled) {
          return;
        }

        handledMessages.push(message.id);

        switch (message.thread.id) {
          case tEcho.id:
            // echo back the same message to the user
            store.dispatch(ThreadActions.addMessage(tEcho, {
              author: echo,
              text: message.text
            }));

            break;
          case tRev.id:
            // echo back the message reveresed to the user
            store.dispatch(ThreadActions.addMessage(tRev, {
              author: rev,
              text: message.text.split('').reverse().join('')
            }));

            break;
          case tWait.id:
            let waitTime: number = parseInt(message.text, 10);
            let reply: string;

            if (isNaN(waitTime)) {
              waitTime = 0;
              reply = `I didn\'t understand ${message}. Try sending me a number`;
            } else {
              reply = `I waited ${waitTime} seconds to send you this.`;
            }

            setTimeout(
              () => {
                store.dispatch(ThreadActions.addMessage(tWait, {
                  author: wait,
                  text: reply
                }));
              },
              waitTime * 1000);

            break;
          default:
            break;
        }
      });
  });
}
