import { Thread } from "./thread.model";
import * as ThreadsActions from './thread.actions';
import { Action } from "redux";
import { Message } from "../message/message.model";
import { createSelector } from "reselect";

export interface ThreadsEntities {
    [id: string]: Thread;
}

export interface ThreadsState {
    ids: string[];
    entities: ThreadsEntities;
    currentThreadId?: string | null;
}

const initialState: ThreadsState = {
    ids: [],
    entities: {},
    currentThreadId: null
}

export const ThreadsReducer = 
 function(state: ThreadsState = initialState, action: Action): ThreadsState {
    switch(action.type) {
        //adds a new Thread to the list of entities
        case ThreadsActions.ADD_THREAD: {
            const thread = (<ThreadsActions.AddThreadAction>action).thread;

            if(state.ids.includes(thread.id)){
                return state;
            }

            return {
                ids: [...state.ids, thread.id],
                currentThreadId: state.currentThreadId,
                entities: Object.assign({}, state.entities, {
                    [thread.id]: thread
                })
            }
        }

        case ThreadsActions.ADD_MESSAGE: {
            const thread = (<ThreadsActions.AddMessageAction>action).thread;
            const message = (<ThreadsActions.AddMessageAction>action).message;

            const isRead = message && message.thread && message.thread.id === state.currentThreadId ? true : message.isRead;

            const newMessage = Object.assign({}, message, {isRead: isRead});

            const oldThread = state.entities[thread.id];

            const newThread = Object.assign({}, oldThread, {
                messages: [...oldThread.messages, newMessage]
            })

            return {
                ids: state.ids,
                currentThreadId: state.currentThreadId,
                entities: Object.assign({}, state.entities, {
                    [thread.id]: newThread
                })
            }
        }

        case ThreadsActions.SELECT_THREAD: {
            const thread = (<ThreadsActions.SelectThreadAction>action).thread;
            const oldThread = state.entities[thread.id];

            const newMessages = oldThread.messages.map((message) => Object.assign({}, message, {
                isRead: true
            }));

            const newThread = Object.assign({}, oldThread, {messages: newMessages});

            return {
                ids: state.ids,
                currentThreadId: thread.id,
                entities: Object.assign({}, state.entities, {[thread.id]: newThread})
            };
        }

        default: 
            return state;
    }
 }




 
 

export const getThreadsState = (state: { threads: ThreadsState; }) => state.threads;

export const getThreadsEntities = createSelector(
   getThreadsState,
   (state: ThreadsState) => state.entities );


export const getAllThreads = createSelector(
   getThreadsEntities,
   (entities: ThreadsEntities) => Object.keys(entities)
       .map((threadId) => entities[threadId])
);
 

export const getCurrentThread = createSelector(
    getThreadsEntities,
    getThreadsState,
    (entities: ThreadsEntities, state: ThreadsState) => {
        // if(state.currentThreadId) {
        //     entities[state.currentThreadId]
        // }
        return entities[state.currentThreadId ? state.currentThreadId : ''];
    } 
);
 
export const getUnreadMessagesCount = createSelector(
    getAllThreads,
    (threads: Thread[]) => threads.reduce(
        (unreadCount: number, thread: Thread) => {
            thread.messages.forEach((message: Message) => {
                if(!message.isRead) {
                    unreadCount++;
                }
            });
            return unreadCount;
        },
    0)
);


//  export const getAllMessages = createSelector(
//    getAllThreads,
//    ( threads: Thread[] ) =>
//      threads.reduce( // gather all messages
//        (messages, thread) => [...messages, ...thread.messages],
//        []).sort((m1, m2) => m1.sentAt - m2.sentAt)); // sort them by time
 