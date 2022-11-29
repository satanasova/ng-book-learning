// User Profile object, stores the 1st and last name and a fn that gives the time

export class Profile {
  constructor(public first: string, public last: string){}

  lastChanged() {
    return new Date();
  }
}