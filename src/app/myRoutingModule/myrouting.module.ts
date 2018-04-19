import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { ProductsDetailComponent } from '../components/products-detail/products-detail.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const tableDeRoutage = [
  { path: 'list', component: ProductsListComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'product/:id', component: ProductsDetailComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},  // pathMach == exactement vide
  { path: '**', component: NotFoundComponent}
];
@NgModule({
  declarations: [ ],
  imports: [
    RouterModule.forRoot(tableDeRoutage)  // activer root
  ],
  exports : [RouterModule],   // on doit exporter le module RouterModule
  providers: [],
  bootstrap: []
})
export class MyRoutingModule { }
