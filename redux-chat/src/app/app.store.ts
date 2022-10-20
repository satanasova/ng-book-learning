import { InjectionToken } from "@angular/core";
import { compose, createStore, Store, StoreEnhancer } from "redux";
import { AppState, default as reducer } from "./app.reducer";

export const AppStore = new InjectionToken('App.store');

const devtools: StoreEnhancer<AppState> = 
    window['__REDUX_DEVTOOLS_EXTENSION__'] ?
    window['__REDUX_DEVTOOLS_EXTENSION__']() : f => f;

export function createAppStore(): Store<AppState> {
    return createStore(reducer, compose(devtools));
}

export const appStoreProviders = [
    {provide: AppStore, useFactory: createAppStore}
]