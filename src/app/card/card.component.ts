import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TextboxState } from '../store/reducer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  currentValue$: Observable<string | number | null>;
  values$: Observable<Array<string | number>>;

  constructor(private store: Store<{ textbox: TextboxState }>) {
    this.currentValue$ = store.select(state => state.textbox.currentValue);
    this.values$ = store.select(state => state.textbox.values);
  }
}
