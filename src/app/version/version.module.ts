import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VersionComponent } from './version/version.component';



@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        VersionComponent
    ],
    declarations: [
        VersionComponent

    ],
    providers: [],
})
export class versionModule { }
