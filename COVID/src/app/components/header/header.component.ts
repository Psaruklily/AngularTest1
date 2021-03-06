import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];
  isEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'білий',
      salon: 'чорний',
      wheels: 'срібний'
    };
    this.options = ['ABS', 'Автопілот', 'Авто паркінг'];
  }

  toEdit(){
    this.isEdit = !this.isEdit;
  }

  addOpt(option){
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option){
    for(let i = 0; i < this.options.length; i++){
      if(this.options[i] == option){
        this.options.splice(i, 1);
        break;
      }
    }
  }

  carSelect(carName){
    if(carName == 'bmw'){
      this.name = 'BMW';
      this.speed = 280;
      this.model = 'M5';
      this.colors = {
        car: 'синій',
        salon: 'білий',
        wheels: 'срібний'
      };
      this.options = ['Система трека', 'Круїз контроль'];
    } else if(carName == 'audi'){
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'RS8';
      this.colors = {
        car: 'білий',
        salon: 'чорний',
        wheels: 'срібний'
      };
      this.options = ['ABS', 'Автопілот', 'Авто паркінг'];
    } else {
      this.name = 'Mercedes';
      this.speed = 180;
      this.model = 'C180';
      this.colors = {
        car: 'білий',
        salon: 'чорний',
        wheels: 'срібний'
      };
      this.options = ['Підігрів сидіння', 'Перегляд фільмів'];
    }
  
  }

}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
