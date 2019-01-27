import { Component, OnInit, Input } from '@angular/core';
import { ICards } from '../interface';
//import { DeckService } from './service';

@Component({
    selector: 'main',
    templateUrl: 'app/files/main.component.html',
    //styleUrls: ['app/styles.css']
    //providers: [DeckService]
})

export class MainComponent implements OnInit {
    @Input() card: ICards[];

    constructor() { }

    ngOnInit() {
    }
}