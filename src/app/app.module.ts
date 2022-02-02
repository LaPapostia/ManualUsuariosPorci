import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Partials/footer/footer.component';
import { HeaderComponent } from './Partials/header/header.component';
import { NovedadesComponent } from './Modulos/novedades/novedades.component';
import { ManualUsuarioComponent } from './Modulos/manual-usuario/manual-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NovedadesComponent,
    ManualUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
