import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlankCharacterComponent } from'../../blank-character/blank-character.component'

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonalDataComponent implements OnInit {

  constructor(private blankCharacterComponent:BlankCharacterComponent) { }

  ngOnInit() {
  }

  onKey(data){
    if(data.name == "nameBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Name = data.value;
    }
    if(data.name == "metaTypeBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.MetaType = data.value;
    }
    if(data.name == "ageBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Age = data.value;
    }
    if(data.name == "sexeBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Sexe = data.value;
    }
    if(data.name == "tailleBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Sizes = data.value;
    }
    if(data.name == "poidsBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Weights = data.value;
    }
    if(data.name == "reputationBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Reputation = data.value;
    }
    if(data.name == "rumeurBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Rumour = data.value;
    }
    if(data.name == "renommeeBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.Fame = data.value;
    }
    if(data.name == "curentKarmaBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.CurentKarma = data.value;
    }
    if(data.name == "totalKarmaBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.TotalKarma = data.value;
    }
    if(data.name == "diversBox"){
      this.blankCharacterComponent.appComponent.shaowrunCharacter.FreeBox = data.value;
    }
  }

}


