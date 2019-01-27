import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './files/main.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, MainComponent ],
    bootstrap: [AppComponent],
})
export class AppModule { }
