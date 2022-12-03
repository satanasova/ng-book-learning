

// Spies
//   A spy is a specific type of mock object that gives us two benefits:
//     1.we can simulate return values and
//     2.count how many times the method was called and with which parameters.

import { SpotifyService } from "src/app/spotify.service";

export class SpyObject {
  constructor(type?) {
    if (type) {
      for (const prop in type.prototype) {
        let m: any = null;
        try {
          m = type.prototype[prop];
        } catch (e) {
          // As we are creating spys for abstract classes,
          // these classes might have getters that throw when they are accessed.
          // As we are only auto creating spys for methods, this
          // should not matter.
        }
        if (typeof m === "function") {
          this.spy(prop);
        }
      }
    }
  }

  spy(name: string) {
    if (!(this as any)[name]) {
      (this as any)[name] = jasmine.createSpy(name);
    }
    return (this as any)[name];
  }

  prop(name: string, value: any) {
    (this as any)[name] = value;
  }
}


