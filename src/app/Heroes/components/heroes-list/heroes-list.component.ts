import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {

  public heroesName: string[] = [
    'SpiderMan', 'IronMan', 'Hulk', 'Capitán America', 'Visión', 'DeadPool',
    'Wolvire', 'AntMan', 'Pantera Negra'
  ]
  public deleteHero?: string;

  removeLastHero(): void{
    this.deleteHero = this.heroesName.pop();
    
  }
}
