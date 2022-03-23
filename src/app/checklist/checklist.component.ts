import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  name: string = "";

  constructor() {}

  characters: Character[] = [
    { name: 'Sorceress', UnfinishedTasks: ["Una Daily #1", "Una Daily #2"] , FinishedTasks: [] },
    { name: 'Berserker',  UnfinishedTasks: ["Una Daily #1", "Una Daily #2"] , FinishedTasks: [] }
  ];

  icons: string[] = [
    "assets/Artillerist.png",
    "assets/Bard.png",
    "assets/Berserker.png",
    "assets/Deadeye.png",
    "assets/Deathblade.png",
    "assets/Gunslinger.png",
    "assets/Paladin.png",
    "assets/Scrapper.png",
    "assets/Shadowhunter.png",
    "assets/Sharpshooter.png",
    "assets/Sorceress.png",
    "assets/Soulfist.png",
    "assets/Striker.png",
    "assets/Wardancer.png",
  ]

  selectedCharacter?: Character;

  ngOnInit(): void {
  }

  onSelect(character: Character): void {
    this.selectedCharacter = character;
  }

  onNgModelChange(event: any){
    console.log('on ng model change', event);
  }

}

class Character {
  name: string | any;
  UnfinishedTasks: string[] = [];
  FinishedTasks: string[] = [];
}