import { Component, Input } from "@angular/core";

@Component({
  selector: "movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent {
  @Input() titleMovie: string;
  @Input() descriptionMovie: string;
  @Input() ageRating: number;
  @Input() durationMovie: string;
}
