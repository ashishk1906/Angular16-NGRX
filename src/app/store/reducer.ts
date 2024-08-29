import { createReducer, on } from '@ngrx/store';
import { changeValue, pushValue, popValue, clearValues } from './actions';
import { updateNavBar } from './actions';
import { NavItem } from '../card/card.component';

export interface TextboxState {
  currentValue: string | number | null;
  values: Array<string | number>;
  navBar: NavItem[];
}

export const initialState: TextboxState = {
  currentValue: null,
  values: [],
  navBar: []
};

export const textboxReducer = createReducer(
  initialState,
  on(updateNavBar, (state, { navBar }) => ({
    ...state,
    navBar: [...navBar] 
  })),
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
