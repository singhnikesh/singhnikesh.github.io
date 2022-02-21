import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: '', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
