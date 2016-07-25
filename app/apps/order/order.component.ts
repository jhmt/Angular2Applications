import {Component, OnInit} from '@angular/core';
import {ServiceService} from './service.service';

@Component({
  selector: 'order',
  template: require('./order.html'),
  styles: [require('./order.css')],
  providers: [ServiceService]
})

export class OrderComponent implements OnInit {
  public services: [{}];
  public totalPrice: number = 0;

  constructor (
      private serviceService: ServiceService
  ) {
  }

  ngOnInit () {
      this.services = this.serviceService.getServices();
    this.sum();
  }

  public toggleActive (service: any) {
      (<any>service).isActive = !(<any>service).isActive;
      this.sum();
  }

  public sum () {
    this.totalPrice = 0;
    this.services
        .forEach((s: any) => {
            if ((<any>s).isActive) {
                this.totalPrice += (<any>s).price;
            }
        });
  }
}
