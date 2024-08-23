import { createReducer, on } from '@ngrx/store';
import { changeValue, pushValue, popValue, clearValues } from './actions';

export interface TextboxState {
  currentValue: string | number | null;
  values: Array<string | number>;
}

const initialState: TextboxState = {
  currentValue: null,
  values: []
};

// Load persisted state from localStorage if available
export const persistedState = JSON.parse(localStorage.getItem('textboxState') as string) || initialState;

export const textboxReducer = createReducer(
  persistedState,
  on(changeValue, (state, { value }) => {
    const newState = {
      ...state,
      currentValue: value
    };
    localStorage.setItem('textboxState', JSON.stringify(newState));
    return newState;
  }),
  on(pushValue, (state, { value }) => {
    const newState = {
      ...state,
      values: [...state.values, value]
    };
    localStorage.setItem('textboxState', JSON.stringify(newState));
    return newState;
  }),
  on(popValue, (state) => {
    const newState = {
      ...state,
      values: state.values.slice(0, -1)
    };
    localStorage.setItem('textboxState', JSON.stringify(newState));
    return newState;
  }),
  on(clearValues, (state) => {
    const newState = {
      ...state,
      values: []
    };
    localStorage.setItem('textboxState', JSON.stringify(newState));
    return newState;
  })
);
