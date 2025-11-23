// routerConfig.ts

import { Routes } from '@angular/router';
import { MyContainerComponent } from './my-container/my-container.component';

const appRoutes: Routes = [
  { path: '/compo', 
    component: MyContainerComponent 
  }
];
export default appRoutes;