import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  private activeDocumentId: string;
  public showRightPanel: boolean;

  public testData = {
    id: 'blabla',
    componentOptions: {
      selected: false,
    },
  };

  constructor() {
    this.activeDocumentId = 'none';
    this.showRightPanel = false;
  }

  ngOnInit(): void {
  }

  public onSelectDocument(documentId: string) {
    this.showRightPanel = this.activeDocumentId === documentId
      ? false
      : true;

    this.activeDocumentId = this.activeDocumentId === documentId
      ? 'none'
      : documentId;

    console.log('selected document', documentId);
  }

  public closeRightPanel(): void {
    this.showRightPanel = false;
    this.activeDocumentId = 'none';

    this.testData.componentOptions.selected = false;
  }
}
