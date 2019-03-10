import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModuleModule } from './custom-material-module/custom-material-module.module';
import { LandingPageComponent } from './landing-page/landing-page.component'
import { GeneralComponentsModule } from './general-components/general-components.module';
import { GlobalDirectivesModule } from './global/global-directives/global-directives.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    CustomMaterialModuleModule,
    GeneralComponentsModule,
    GlobalDirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
