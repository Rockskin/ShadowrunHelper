import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  blankCharacter:boolean = false;
  buildMethod:boolean = false;

  shaowrunCharacter:ShaowrunCharacter = new ShaowrunCharacter();

  ShowBlankCharacter(){
    this.ShowModule('blankCharacter');
  }

  ShowModule(moduleName:string){
    this.blankCharacter = (moduleName == 'blankCharacter');
    this.buildMethod = (moduleName == 'buildMethod');
  }

}
  
export class ShaowrunCharacter{
  //personal-data
  Name:string;
  MetaType:string;
  Age:string;
  Sexe:string;
  Sizes:string;
  Weights:string;
  Reputation:string;
  Rumour:string;
  Fame:string;
  CurentKarma:string;
  TotalKarma:string;
  FreeBox:string
  //character-attribute
  Body:number;
  Agility:number;
  Reaction:number;
  Strength:number;
  Willpower:number;
  Logic:number;
  Intuition:number;
  Charisme:number;
  Edge:number;
  EdgePoints:number;
  Essence:number;
  MagicResonance:number;
  Initialive:string;
  MatrixInitiative:string;
  AstralInitiative:string;
  Composure:number;
  JudgeIntention:number;
  Memory:number;
  LiftCarry:number;
  Movement:number;
  Physicalimit:number;
  MentalLimit:number;
  SicialMimit:number;



}
export class Skill{
  Name:string;
  Attribute:AttributeEnum;
  Category:CategoryEnum;
  Default:boolean;
  Skillgroup:SkillGroupEnum;
  specs:string[];
}
export class ShadwrunBuildOption{
  CreationType:CreationType; //Free or Rules
}
// Enum Zone //
export enum AttributeEnum{
  "Body",
  "Agility",
  "Reaction",
  "Strength",
  "Willpower",
  "Logic",
  "Intuition"
}
export enum CategoryEnum{
  "Combat Active",
  "Physical Active",
  "Social Active",
  "Magical Active",
  "Pseudo-Magical Active",
  "Resonance Active",
  "Technical Active",
  "Vehicle Active",
  "Academic",
  "Interest",
  "Language",
  "Professional",
  "Street"
}
export enum SkillGroupEnum{
  "Acting",
  "Athletics",
  "Biotech",
  "Close Combat",
  "Conjuring",
  "Cracking",
  "Electronics",
  "Enchanting",
  "Firearms",
  "Influence",
  "Engineering",
  "Outdoors",
  "Sorcery",
  "Stealth",
  "Tasking"

}
export enum CreationType{
  Free,
  Rules
}