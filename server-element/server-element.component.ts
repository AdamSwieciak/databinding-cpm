import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, OnDestroy {
  @Input('srvElement') element: {type: string,  name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log('contructo log')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges log')
    console.log(changes)
  }


  ngOnInit() {
    console.log('NgOninit log') 
  }
  ngDoCheck() {
    console.log('ngDoCheck log')
  }
  ngAfterContentInit() {
    console.log('ngAfterContentIni log')
    console.log('ContentChildddddddddddd'+this.paragraph.nativeElement.textContent)
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked log')
  }
  ngAfterViewInit() {
    console.log('ngAfterViewIni log')
    console.log('Text content ' + this.header.nativeElement.textContent)
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked log')
  }
  ngOnDestroy() {
    console.log('ngOnDestroy log')
  }

}
