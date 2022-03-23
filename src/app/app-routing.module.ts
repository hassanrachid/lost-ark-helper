import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist.component';

const routes: Routes = [{path: 'checklist', component: ChecklistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
