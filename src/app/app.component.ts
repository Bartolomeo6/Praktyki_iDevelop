import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BanerComponent } from './baner/baner.component';
import { MostValuablePlacesComponent } from './most-valuable-places/most-valuable-places.component';
import { FactsSectionComponent } from './facts-section/facts-section.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BanerComponent, MostValuablePlacesComponent, FactsSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Praktyki w Maladze 2024';
}
