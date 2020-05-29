import { Component } from "@angular/core";

@Component({
  selector: "pesquisar",
  templateUrl: "./pesquisar.component.html",
  styleUrls: ["./pesquisar.component.css"]
})
export class PesquisarComponent {
  filter = "";

  onInputChange(name) {
    console.log(name);
  }
}
