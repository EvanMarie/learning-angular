import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DesignComponent } from './design/design.component';
import { RouteTwoComponent } from './route-two/route-two.component';
import { RouteThreeComponent } from './route-three/route-three.component';

const routes: Routes = [
//   { path: '', component: AppComponent },
  { path: 'design', component: DesignComponent },
    { path: 'route-two', component: RouteTwoComponent },
       { path: 'route-three', component: RouteThreeComponent },
];

export default routes;
