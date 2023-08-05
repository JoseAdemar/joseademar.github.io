import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './component/cabecalho/cabecalho.component';
import { RodapeComponent } from './component/rodape/rodape.component';
import { HomeComponent } from './component/home/home.component';
import { DoarComponent } from './component/doar/doar.component';
import { SobrenosComponent } from './component/sobrenos/sobrenos.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { rotas } from './app.rotas';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent,
    DoarComponent,
    SobrenosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    rotas,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
