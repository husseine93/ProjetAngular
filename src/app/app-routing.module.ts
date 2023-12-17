import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FilmComponent } from '../app/films/films.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NotationComponent } from './notation/notation.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'film/:id', canActivate: [AuthGuard], component: FilmComponent },
  {
    path: 'notation/:id',
    canActivate: [AuthGuard],
    component: NotationComponent,
  },
  { path: 'search', canActivate: [AuthGuard], component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
