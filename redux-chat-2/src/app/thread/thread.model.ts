import { Message } from "../message/message.model";


export interface Thread {
    [x: string]: any;
    id: string;
    name: string;
    avatarSrc: string;
    messages: Message[];
}