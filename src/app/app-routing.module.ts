import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ErrorComponent } from './component/error/error.component';
import { LogoutComponent } from './component/logout/logout.component';
import { RouteGuardService } from './service/guard/route-guard.service';
import { ChartComponent } from './component/chart/chart.component';
import { TopGainersComponent } from './component/top-gainers/top-gainers.component';
import { TopLosersComponent } from './component/top-losers/top-losers.component';
import { ExportComponent } from './component/export/export.component';
import { StockComponent } from './component/stock/stock.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuardService] },
  // { path: 'stock', component: StockComponent, canActivate: [RouteGuardService] },
  // { path: 'chart', component: ChartComponent, canActivate: [RouteGuardService] },
  // { path: 'topGainers', component: TopGainersComponent, canActivate: [RouteGuardService] },
  // { path: 'topLosers', component: TopLosersComponent, canActivate: [RouteGuardService] },
  // { path: 'export', component: ExportComponent, canActivate: [RouteGuardService] },
  // { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  // { path: '**', component: ErrorComponent }

  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'stock', component: StockComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'topGainers', component: TopGainersComponent },
  { path: 'topLosers', component: TopLosersComponent },
  { path: 'export', component: ExportComponent },
  { path: 'logout', component: LogoutComponent},
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

