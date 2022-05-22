import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
    @Input('img') postImg = '';
    @Output() imgSelected = new EventEmitter<string>();

    constructor() {
        console.log('constructor() called', this.postImg);
    }

    ngOnInit() {
        console.log('ngOnInit() called', this.postImg);
    }
}
