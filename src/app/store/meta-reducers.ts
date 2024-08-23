import { Action, ActionReducer } from '@ngrx/store';

// Key for localStorage
const STORAGE_KEY = 'appState';

// Meta-reducer to persist state
export function localStorageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action: Action) => {
    const nextState = reducer(state, action);

    // Save state to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));

    return nextState;
  };
}

// Meta-reducer to load state from localStorage
export function hydrateStateMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action: Action) => {
    if (state === undefined) {
      // Load state from localStorage
      const savedState = localStorage.getItem(STORAGE_KEY);
      state = savedState ? JSON.parse(savedState) : undefined;
    }

    return reducer(state, action);
  };
}
