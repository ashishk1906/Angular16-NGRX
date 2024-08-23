import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule, MetaReducer } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TextboxComponent } from './textbox/textbox.component';
import { textboxReducer } from './store/reducer';
import { localStorageMetaReducer, hydrateStateMetaReducer } from './store/meta-reducers';

const metaReducers: MetaReducer<any>[] = [hydrateStateMetaReducer, localStorageMetaReducer];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TextboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ textbox: textboxReducer }, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
