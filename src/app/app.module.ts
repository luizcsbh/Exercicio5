import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TituloComponent } from "../titulo/titulo.component";
import { PesquisarComponent } from "../pesquisar/pesquisar.component";
import { MovieComponent } from "../movie/movie.component";

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    PesquisarComponent,
    MovieComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
