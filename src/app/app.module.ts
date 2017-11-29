import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildMethodComponent } from './build-method/build-method.component';
import { CaracterPrioritiesComponent } from './caracter-priorities/caracter-priorities.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BlankCharacterComponent } from './blank-character/blank-character.component';
import { PersonalDataComponent } from './blankc/personal-data/personal-data.component';
import { CharacterAttributeComponent } from './blankc/character-attribute/character-attribute.component';
import { CharacterSkillsComponent } from './blankC/character-skills/character-skills.component';



@NgModule({
  declarations: [
    AppComponent, 
    BuildMethodComponent,
    CaracterPrioritiesComponent,
    TopNavComponent,
    BlankCharacterComponent,
    PersonalDataComponent,
    CharacterAttributeComponent,
    CharacterSkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
