import { Component, OnInit } from '@angular/core';
import { IAnimal } from '../song/animal';
import { AnimalService } from '../song/animal.service';

@Component({
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  pageTitle: string = 'Custom Song';
  errorMessage: string;
  public animal: any = {};

  animals: IAnimal[] = [];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
  }

}
