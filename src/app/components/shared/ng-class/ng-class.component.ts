import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  alert: string;
  propiedades: Object = {
    danger: true
  };

  loading: boolean;
  constructor() {
    this.alert = 'alert-info';
    this.loading = false;
  }

  ngOnInit() {}

  ejecutar() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
