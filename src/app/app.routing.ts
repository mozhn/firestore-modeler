import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'content/editor',
    pathMatch: 'full'
  },
  {
    path: 'content',
    children: [
      {
        path: 'editor',
        loadChildren: () => import('./pages/content/editor/editor.module').then(
          m => m.EditorModule
        ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
