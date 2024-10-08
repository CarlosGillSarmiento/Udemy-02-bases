import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CounterModule } from './Counter/components/counter.module';
import { HeroesModule } from './Heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { VersionComponent } from './version/version/version.component';
import { versionModule } from './version/version.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule,
    versionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
