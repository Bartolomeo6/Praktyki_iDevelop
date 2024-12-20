import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-most-valuable-places',
  templateUrl: './most-valuable-places.component.html',
  styleUrls: ['./most-valuable-places.component.css'],
  imports:[FormsModule, CommonModule]
})
export class MostValuablePlacesComponent implements OnInit {
  places = [
    {
      name: 'Katedra w Maladze',
      description: 'Wspaniała renesansowa katedra znana jako „La Manquita” (Jednoręka dama) ze względu na brak jednej z wież.'
    },
    {
      name: 'Zamek Gibralfaro',
      description: 'Twierdza z XIV wieku z pięknymi widokami na miasto i morze oraz bogatą historią.'
    },
    {
      name: 'Muzeum Picassa',
      description: 'Miejsce narodzin Pabla Picassa, prezentujące wiele jego dzieł oraz wystawy czasowe innych artystów.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(elementId: string): void { 
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' }); 
  }
}
