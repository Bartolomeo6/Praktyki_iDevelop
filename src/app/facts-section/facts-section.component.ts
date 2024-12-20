import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-facts-section',
  templateUrl: './facts-section.component.html',
  styleUrls: ['./facts-section.component.css'],
  imports: [CommonModule, FormsModule]
})
export class FactsSectionComponent implements OnInit {
  facts: string[] = [
    'Malaga jest jednym z najstarszych miast na świecie, założonym około 770 roku p.n.e.',
    'Katedra w Maladze ma tylko jedną wieżę, co jest rzadkością dla kościołów tej wielkości.',
    'Pablo Picasso urodził się w Maladze w 1881 roku.',
    'Malaga jest znana ze swojego słodkiego wina, które produkowane jest z lokalnych winogron Moscatel.',
    'W Maladze znajduje się jedyne w Hiszpanii muzeum dedykowane sztuce rzymskiej, Muzeum Pompidou.',
    'Alcazaba w Maladze jest jedną z najlepiej zachowanych mauretańskich twierdz w Hiszpanii.',
    'W Maladze odbywa się jedno z największych i najbardziej znanych festiwali w Hiszpanii - Feria de Agosto.',
    'Teatr rzymski w Maladze został odkryty dopiero w 1951 roku podczas prac budowlanych.',
    'Malaga ma ponad 300 słonecznych dni w roku, co czyni ją idealnym miejscem na wakacje przez cały rok.'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(elementId: string): void { 
    document.getElementById(elementId)?.scrollIntoView({ 
      behavior: 'smooth' 
    }); 
  }
}
