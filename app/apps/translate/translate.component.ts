import {Component, Injectable} from '@angular/core';
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'translate',
  template: require('./translate.html')
})

@Injectable()
export class TranslateComponent {
    public original: string;
    public result: string;

    constructor(private http:Http) {
    }

    public onChange($event) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('key', 'trnsl.1.1.20160731T021111Z.383194e3ccc83ebe.83d6c03252081c5a20733b87380d87ffdd2ef93f');
        params.set('text', this.original);
        params.set('lang', 'en-fr');
        this.http.get('https://translate.yandex.net/api/v1.5/tr.json/translate',
        {
            search: params
        })
        .subscribe(res => {
            this.result = res.json().text[0];
        });
    }
}
