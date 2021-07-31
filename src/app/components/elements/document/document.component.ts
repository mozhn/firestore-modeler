import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FirestoreDocument } from 'src/app/models/firestore-document.model';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  @Output()
  public onSelect: EventEmitter<string>;

  @Input()
  public document: FirestoreDocument;

  @HostListener('click', ['$event.target']) onClickComponent(event: any) {
    this.document.componentOptions.selected = !this.document.componentOptions.selected
    this.onSelect.emit(this.document.id);
  }

  constructor() {
    this.onSelect = new EventEmitter();
  }

  ngOnInit(): void {}
}
