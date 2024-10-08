import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroesHeroComponent {

  public name: string = "SpiderMan";
  public age:  number = 29;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age} años`;
  }
  changeName():void {
    this.name = "Iron-Man";
  }

  changeAge():void {
    this.age = 45;
  }

  resetForm():void {
    this.name = "SpiderMan";
    this.age = 29;
  }
}
