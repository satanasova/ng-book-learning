import { fakeAsync, inject, TestBed, tick } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpBackend, HttpClient, HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";
import { SpotifyService } from "src/app/spotify.service";
import { Component } from "@angular/core";

// This is a good hint when writing unit tests:
//  isolate everything that you don’t control before testing.
//  In our case, this piece is the Spotify service. 
//  The solution is that we will replace the HTTP request with 
//  something that would behave like it, but will not hit the real Spotify server.
//  Doing this in the testing world is called mocking a dependency.
//  They are sometimes also called stubbing a dependency.

//--------------------
// Stubs are objects we create on the fly, 
// with a subset of the behaviors our dependency has

class SpeedTrap {
  ticketCount: number;
  speedToCheck: number;

  constructor(car){
    this.speedToCheck = car.getSpeed();
  }

  checkSpeed(): void {
    if(this.speedToCheck > 60) {
      this.ticketCount++
    }
  }
}

describe('Speedtrap', function() {
  it('tickets a car at more than 60mph', function() {
    let stubCar = {
      getSpeed: function() {
        return 61;
      }
    };
    let speedTrap = new SpeedTrap(stubCar);
    speedTrap.ticketCount = 0;
    speedTrap.checkSpeed();
    expect(speedTrap.ticketCount).toEqual(1);
  });
});

//-------------------
// Mocks in our case will be a more complete representation of objects, 
// that overrides parts or all of the behavior of the dependency. 
// Mocks can, and most of the time will be reused by more than one test across our suite.
// They will also be used sometimes to assert that given methods were called 
// the way they were supposed to be called.

class MockCar {
  startCallCount: number = 0;

  start() {
    this.startCallCount++;
  }
}

class CarRemote {

  constructor(private car: MockCar){
    console.log('asd')
  }

  holdButton(type: string) {
    if (type === 'start') {
      this.car.startCallCount++;
    }
  }
}

describe('CarRemote', function() {


  it('starts the car when the start key is held', function() {
    let car = new MockCar();
    let remote = new CarRemote(car);
    remote.holdButton('start');
    expect(car.startCallCount).toEqual(1);
  })
})