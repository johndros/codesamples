import {Component} from "@angular/core"

@Component({
    selector: 'my-app',
    template: `<div style="padding:5px">
                            <ul class="nav nav-tabs" style="margin-bottom: 10px;">
                                  <li class="nav-item"><a class="nav-link" routerLink="home">Home</a></li>
                                  <li class="nav-item"><a class="nav-link" routerLink="employees">Employees</a></li>
                            </ul>
                            <router-outlet></router-outlet>
                        </div>
                        `
})

export class AppComponent {
    userText: string = 'Testing';
}