import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//import child components
import { ComponentA } from './component-a/component-a';
import { ComponentB } from './component-b/component-b';

//root component
@Component({
  selector: 'root-directive', //html tag used to render this component
  imports: [RouterOutlet, ComponentA, ComponentB], //import components that can be used inside this components template
  templateUrl: './app.html',
  styleUrl: './app.css'
})

//properties to store variables
export class App {
  name:string = "Adriana";
  age:number = 24;
}
