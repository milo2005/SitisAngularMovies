import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'movies', component: DashboardComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouter { }
