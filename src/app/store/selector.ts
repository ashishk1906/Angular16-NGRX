import { createSelector } from '@ngrx/store';
import { TextboxState } from './reducer';

export const selectTextboxState = (state: { textbox: TextboxState }) => state.textbox;

export const selectCurrentValue = createSelector(
  selectTextboxState,
  (state: TextboxState) => state.currentValue
);

export const selectValues = createSelector(
  selectTextboxState,
  (state: TextboxState) => state.values
);

export const selectNavBar = createSelector(
  selectTextboxState,
  (state: TextboxState) => state.navBar
);
