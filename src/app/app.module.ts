import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatChipsModule} from '@angular/material/chips';
import { SpellcardComponent } from "./components/spellcard/spellcard.component";

@NgModule({
  declarations: [
      AppComponent,
      SpellcardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {


}
