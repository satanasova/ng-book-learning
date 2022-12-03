export class ConsoleSpy {
  public logs: string[] = [];
  log(...args) {
    this.logs.push(args.join(' '));
  }
  warn(...args) {
    this.log(...args);
  }
  error(...args){
    this.log(...args)
  }
}

export function createEvent(eventType: any): Event {
  const evt: Event = document.createEvent('Event');
  evt.initEvent(eventType, true, true);
  return evt;
}

export function dispatchEvent(element: any, eventType: any) {
  element.dispatchEvent(createEvent(eventType));
}

export function touchInput(input: HTMLInputElement) {
  input.focus();
  input.blur();
}