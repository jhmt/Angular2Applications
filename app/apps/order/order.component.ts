import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'order',
  template: require('./order.html'),
  styles: [require('./order.css')]
})

export class OrderComponent implements OnInit {
  public services: [{}];
  public totalPrice: number = 0;

  ngOnInit () {
      this.services = [
		{
			name: 'Tutorials Development',
			price: 500,
			isActive:true
		},{
			name: 'Tutorials Design',
			price: 300,
			isActive:false
		},{
			name: 'Code Integration',
			price: 250,
			isActive:false
		},{
			name: 'Training',
			price: 220,
			isActive:false
		}
	];
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
