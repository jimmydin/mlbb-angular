import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "about", component: AboutComponent},
  {path: "hero", component: HeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
