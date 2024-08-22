import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeValue, pushValue, popValue, clearValues } from '../store/actions';
import { TextboxState } from '../store/reducer';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent {
  inputValue: string | number;

  constructor(private store: Store<{ textbox: TextboxState }>) {
    this.inputValue = '';
  }

  onChange() {
    this.store.dispatch(changeValue({ value: this.inputValue }));
  }

  onPush() {
    this.store.dispatch(pushValue({ value: this.inputValue }));
  }

  onPop() {
    this.store.dispatch(popValue());
  }

  onClear() {
    this.store.dispatch(clearValues());
  }
}
