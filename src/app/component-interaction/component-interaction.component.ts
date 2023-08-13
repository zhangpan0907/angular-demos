import { Component } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent {
  name = "Jack"
  show = false;

  showAge() {
    console.log(1111);
    this.show = true;
  }
}
