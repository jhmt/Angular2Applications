import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  directives: [ ROUTER_DIRECTIVES ]
})
@Routes([
  {path: '/',            component: HomeComponent },
  {path: '/home',        component: HomeComponent },
  {path: '/about',       component: AboutComponent },
  {path: '/contact',     component: ContactComponent },
  {path: '/*',           component: HomeComponent }
])
export class AppComponent {}
