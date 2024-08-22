import { createAction, props } from '@ngrx/store';

export const changeValue = createAction('[Textbox] Change', props<{ value: string | number }>());
export const pushValue = createAction('[Textbox] Push', props<{ value: string | number }>());
export const popValue = createAction('[Textbox] Pop');
export const clearValues = createAction('[Textbox] Clear');
