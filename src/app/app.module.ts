import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { SharedModule } from './shared/shared.module';
import { TitleComponent } from './title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DataBindingComponent,
    DiretivasEstruturaisComponent,
    DiretivasAtributosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
