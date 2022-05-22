import {
    Component,
    Input,
    EventEmitter,
    Output,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
})
export class PostComponent
    implements
        OnInit,
        OnChanges,
        DoCheck,
        AfterContentChecked,
        AfterViewChecked,
        AfterContentInit,
        AfterViewInit,
        OnDestroy
{
    @Input('img') postImg = '';
    @Output() imgSelected = new EventEmitter<string>();

    constructor() {
        console.log('constructor() called', this.postImg);
    }

    ngOnInit() {
        console.log('ngOnInit() called', this.postImg);
    }

    ngOnChanges() {
        console.log('on changes');
    }

    ngDoCheck() {
        console.log('do check');
    }

    ngAfterContentChecked() {
        console.log('a-content-checked');
    }

    ngAfterViewChecked() {
        console.log('a-view-checked');
    }

    ngAfterContentInit() {
        console.log('a-content-init');
    }

    ngAfterViewInit() {
        console.log('a-view-init');
    }

    ngOnDestroy() {
        console.log('destroy');
    }
}
