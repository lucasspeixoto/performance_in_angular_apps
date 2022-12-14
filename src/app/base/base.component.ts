import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent  {

  constructor(public readonly router: Router) {}

  public start(): void {
    this.router.navigateByUrl('product')
  }

}
