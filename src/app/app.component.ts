import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    name = 'luis ramirez';
    imgURL =
        'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0';
    images = [
        'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0',
        'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0',
        'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0',
    ];
    currentDate = new Date();
    cost = 2000;
    temperature = 25.3;
    pizza = {
        toppings: ['pepperoni', 'rucola', 'anchois'],
        size: 'large',
    };
    blueClass = false;
    fontSize = 16;

    getName() {
        return this.name;
    }

    changeImage(event: KeyboardEvent) {
        this.imgURL = (event.target as HTMLInputElement).value;
    }

    logImg(event: string) {
        console.log(event);
    }
}
