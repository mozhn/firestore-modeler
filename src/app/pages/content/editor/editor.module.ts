import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { EditorRoutingModule } from './editor.routing';
import { HeaderComponent } from 'src/app/components/layout/header/header.component';
import { DocumentComponent } from 'src/app/components/elements/document/document.component';
import { RightPanelComponent } from 'src/app/components/layout/right-panel/right-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditorComponent,
    HeaderComponent,
    DocumentComponent,
    RightPanelComponent
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
    FormsModule
  ]
})
export class EditorModule { }
