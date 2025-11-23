import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyContainerComponent } from './my-container/my-container.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
   { path: 'compo', 
    component: MyContainerComponent 
   },
   { path: 'home', 
    component: HomeComponent 
   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
