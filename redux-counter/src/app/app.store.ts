import { InjectionToken } from "@angular/core";
import { compose, createStore, Store, StoreEnhancer } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { AppState } from "./app.state";
import { counterReducer as reducer } from "./counter.reducer";


const devtools: StoreEnhancer<AppState> = 
    window['__REDUX_DEVTOOLS_EXTENSION__'] ?
    window['__REDUX_DEVTOOLS_EXTENSION__']() : f => f;

export function createAppStore(): Store<AppState> {
    return createStore(reducer, compose(devtools))
}

export const AppStore = new InjectionToken('App.store');

export const appStoreProviders = [
    {provide: AppStore, useFactory: createAppStore }
]
