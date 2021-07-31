import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {
  @Output()
  public onClose: EventEmitter<void>;

  constructor() {
    this.onClose = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
