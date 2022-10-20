import { Action, ActionCreator } from "redux";
import { ObjectUnsubscribedError } from "rxjs";
import { Message } from "../message/message.model";
import { uuid } from "../util/uuid";
import { Thread } from "./thread.model";


// ADD THREAD
export const ADD_THREAD = '[Thread] Add';

export interface AddThreadAction extends Action {
    thread: Thread;
}

export const addThread: ActionCreator<AddThreadAction> = (thread) => ({
    type: ADD_THREAD,
    thread: thread
});


// ADD MESSAGE
export const ADD_MESSAGE = '[Thread] Add Message';

export interface AddMessageAction extends Action {
    thread: Thread,
    message: Message
}

export const addMessage: ActionCreator<AddMessageAction> =
    (thread: Thread, messageArgs: Message): AddMessageAction => {
        const defaults = {
            id: uuid(),
            sentAt: new Date(),
            isRead: false,
            thread: thread
        };

        const message: Message = Object.assign({}, defaults, messageArgs);

        return {
            type: ADD_MESSAGE,
            thread: thread,
            message: message
        }
    }


// SELECT THREAD
export const SELECT_THREAD = '[Thread] Select';

export interface SelectThreadAction extends Action {
    thread: Thread;
}

export const selectThread: ActionCreator<SelectThreadAction> = (thread) => ({
    type: SELECT_THREAD,
    thread: thread
});