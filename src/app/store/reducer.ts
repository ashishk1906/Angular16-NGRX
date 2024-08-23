import { createReducer, on } from '@ngrx/store';
import { changeValue, pushValue, popValue, clearValues } from './actions';

export interface TextboxState {
  currentValue: string | number | null;
  values: Array<string | number>;
}

export const initialState: TextboxState = {
  currentValue: null,
  values: []
};

export const textboxReducer = createReducer(
  initialState,
  on(changeValue, (state, { value }) => ({
    ...state,
    currentValue: value
  })),
  on(pushValue, (state, { value }) => ({
    ...state,
    values: [...state.values, value]
  })),
  on(popValue, (state) => ({
    ...state,
    values: state.values.slice(0, -1)
  })),
  on(clearValues, (state) => ({
    ...state,
    values: []
  }))
);
