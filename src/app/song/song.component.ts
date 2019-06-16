import { Component, OnInit } from '@angular/core';
import { IAnimal } from './animal';
import { AnimalService } from "./animal.service";

@Component({
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  pageTitle: string = 'Original Song';
  errorMessage: string;

  animals: IAnimal[] = [];

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.animalService.getAnimals().subscribe(
      animals => this.animals = animals,
      error => this.errorMessage = <any>error
    );
}

}
