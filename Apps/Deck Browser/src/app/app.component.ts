import { Component, OnInit } from '@angular/core';
import { ICards } from './interface';
import { DeckService } from './service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/styles.css'],
    providers: [DeckService]
})

export class AppComponent implements OnInit{
    cards: ICards[];
    selectedCard: ICards[];

    constructor(private _Service: DeckService) {
    }

    ngOnInit() {
        this._Service.getCards()
            .subscribe(cards => this.cards = cards,
                error => {
                    console.error(error);
                }
            )
    }
    onSelect(card: ICards[]): void {
        this.selectedCard = card;
    }
}