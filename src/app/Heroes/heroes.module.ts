import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroesHeroComponent } from "./components/hero/hero.component";
import { HeroesListComponent } from "./components/heroes-list/heroes-list.component";


@NgModule({
    declarations:[
        HeroesHeroComponent,
        HeroesListComponent
    ],
    exports:[
        HeroesHeroComponent,
        HeroesListComponent,
    ],
    imports:[
        CommonModule
    ]
})

export class HeroesModule{

}