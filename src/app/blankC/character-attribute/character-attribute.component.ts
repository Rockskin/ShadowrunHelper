import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlankCharacterComponent } from'../../blank-character/blank-character.component'

@Component({
  selector: 'app-character-attribute',
  templateUrl: './character-attribute.component.html',
  styleUrls: ['./character-attribute.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CharacterAttributeComponent implements OnInit {

  constructor(private blankCharacterComponent:BlankCharacterComponent) { }

  ngOnInit() {
  }
  onKey(data){
    if(data.name == "constitutionBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Body = data.value;
    }
    if(data.name == "EssenceBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Essence = data.value;
    }
    if(data.name == "agiliteBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Agility = data.value;
    }
    if(data.name == "magieResonanceBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.MagicResonance = data.value;
    }
    if(data.name == "reactionBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Reaction = data.value;
    }
    if(data.name == "initPhysiqueBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Initialive = data.value;
    }
    if(data.name == "forceBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Strength = data.value;
    }
    if(data.name == "initMatricielleBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.MatrixInitiative = data.value;
    }
    if(data.name == "volonteBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Willpower = data.value;
    }
    if(data.name == "initAstraleBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.AstralInitiative = data.value;
    }
    if(data.name == "logiqueBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Logic = data.value;
    }
    if(data.name == "sangFroidBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Composure = data.value;
    }
    if(data.name == "intuitionBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Intuition = data.value;
    }
    if(data.name == "jaugerLesIntentionsBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.JudgeIntention = data.value;
    }
    if(data.name == "CharismeBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Charisme = data.value;
    }
    if(data.name == "chanceBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Edge = data.value;
    }
    if(data.name == "souleverTransporterBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.LiftCarry = data.value;
    }
    if(data.name == "pointDeChance"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.EdgePoints = data.value;
    }
    if(data.name == "deplacementBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Movement = data.value;
    }
    if(data.name == "limitePhysiqueBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Physicalimit = data.value;
    }
    if(data.name == "limiteMentalBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.MentalLimit = data.value;
    }
    if(data.name == "limiteSocialBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.SicialMimit = data.value;
    }
  
  }    
}
