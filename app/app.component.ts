import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {NotepadComponent} from './apps/notepad/notepad.component';
import {OrderComponent} from './apps/order/order.component';
import {TranslateComponent} from './apps/translate/translate.component';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ HTTP_PROVIDERS ]
})
@Routes([
  {path: '/',            component: HomeComponent },
  {path: '/home',        component: HomeComponent },
  {path: '/about',       component: AboutComponent },
  {path: '/contact',     component: ContactComponent },
  {path: '/apps/notepad',   component: NotepadComponent },
  {path: '/apps/order',   component: OrderComponent },
  {path: '/apps/translate',   component: TranslateComponent },
  {path: '/*',           component: HomeComponent }
])
export class AppComponent {}
