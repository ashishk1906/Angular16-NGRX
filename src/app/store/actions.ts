import { createAction, props } from '@ngrx/store';
import { NavItem } from '../card/card.component';

export const changeValue = createAction('[Textbox] Change', props<{ value: string | number }>());
export const pushValue = createAction('[Textbox] Push', props<{ value: string | number }>());
export const popValue = createAction('[Textbox] Pop');
export const clearValues = createAction('[Textbox] Clear');
export const updateNavBar = createAction( '[Card Component] Update NavBar',props<{ navBar: NavItem[] }>());
