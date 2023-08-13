import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  disabled = true

  bg = "red"
  cls = "light"

  num = 1;
  onPlus() {
    this.num++;
  }

  text = "";
}
