import { Injectable } from '@angular/core';
import { ICards } from './interface';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class DeckService {
    headers: Headers;
    options: RequestOptions;

    constructor(private _http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getCards() {
        let names: string[] = [
            'Burial from a Different Dimension',
            'Charge of the Light Brigade',
            'Infernoid Antra',
            'Infernoid Attondel',
            'Infernoid Decatron',
            'Infernoid Devyaty',
            'Infernoid Harmadik',
            'Infernoid Onuncu',
            'Infernoid Patrulea',
            'Infernoid Pirmais',
            'Infernoid Seitsemas',
            'Lyla, Lightsworn Sorceress',
            'Monster Gate',
            'One for One',
            'Raiden, Hand of the Lightsworn',
            'Reasoning',
            'Time-Space Trap Hole',
            'Torrential Tribute',
            'Upstart Goblin',
            'Void Seer'
        ];
        return Observable.forkJoin<ICards>(
            names.map(
                i => this._http.get("http://52.57.88.137/api/card_data/" + i, this.options)
                    .map((response: Response) => response.json().data)
                    .catch(this.handleError)
            )
        )
    }
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}