import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TextboxState } from '../store/reducer';
import { updateNavBar } from '../store/actions'; 

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
  navBar: NavItem[] = [];

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
    this.currentValue$ = store.select(state => state.textbox.currentValue);
    this.values$ = store.select(state => state.textbox.values);

  
    this.store.select(state => state.textbox.navBar).subscribe(navBar => {
      this.navBar = navBar;
    });
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
}
