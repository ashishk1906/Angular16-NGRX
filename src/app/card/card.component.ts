// src/app/card/card.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TextboxState } from '../store/reducer';
import { updateNavBar } from '../store/actions'; 
import { selectCurrentValue, selectValues, selectNavBar } from '../store/selector';

export interface NavItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  currentValue$: Observable<string | number | null>;
  values$: Observable<Array<string | number>>;
  navBar$: Observable<NavItem[]>;

  student: NavItem[] = [{ name: 'Home', route: '' }, { name: 'Study', route: '' }];
  teacher: NavItem[] = [{ name: 'LMS', route: '' }, { name: 'Dashboard', route: '' }, { name: 'Exams', route: '' }];
  clerk: NavItem[] = [{ name: 'Fees', route: '' }, { name: 'Admission', route: '' }, { name: 'Result', route: '' }];

  appRoutes: { [k: string]: string } = {
    "Home": "/home",
    "Study": "/study",
    "LMS": "/lms",
    "Dashboard": "/dashboard",
    "Exams": "/exams",
    "Fees": "/fees",
    "Admission": "/admission",
    "Result": "/result"
  };

  constructor(private store: Store<{ textbox: TextboxState }>) {
    this.currentValue$ = this.store.select(selectCurrentValue);
    this.values$ = this.store.select(selectValues);
    this.navBar$ = this.store.select(selectNavBar);
  }
  
  appendRoutes(navItems: NavItem[]) {
    navItems.forEach(nav => {
      nav.route = this.appRoutes[nav.name];
    });
  }

  onStudentClick() {
    this.appendRoutes(this.student);
    this.store.dispatch(updateNavBar({ navBar: this.student })); 
  }

  onTeacherClick() {
    this.appendRoutes(this.teacher);
    this.store.dispatch(updateNavBar({ navBar: this.teacher })); 
  }

  onClerkClick() {
    this.appendRoutes(this.clerk);
    this.store.dispatch(updateNavBar({ navBar: this.clerk })); 
  }

  ut_changePersona(personaName: string) {
    console.log(personaName);
    switch (personaName) {
      case 'student':
        this.onStudentClick();     
        break;
      case 'teacher':
        this.onTeacherClick();     
        break;
      case 'clerk':
        this.onClerkClick();     
        break; 
    }
  }
}
