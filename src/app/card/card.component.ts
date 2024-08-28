import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TextboxState } from '../store/reducer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  currentValue$: Observable<string | number | null>;
  values$: Observable<Array<string | number>>;
  navBar: string[] = [];

  student = ['Home', 'Study'];
  teacher = ['LMS', 'Dashboard', 'Exams'];
  clerk = ['Fees', 'Admission', 'Result'];

  constructor(private store: Store<{ textbox: TextboxState }>) {
    this.currentValue$ = store.select(state => state.textbox.currentValue);
    this.values$ = store.select(state => state.textbox.values);
  }

  onStudentClick() {
    this.navBar = this.student; 
  }

  onTeacherClick() {
    this.navBar = this.teacher; 
  }

  onClerkClick() {
    this.navBar = this.clerk; 
  }
}
