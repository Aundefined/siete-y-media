import { RouterModule, Routes } from '@angular/router';
import { SieteYMediaComponent } from './siete-y-media/siete-y-media.component';

const routes: Routes = [
    { path: '', component: SieteYMediaComponent },
    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const appRouting = RouterModule.forRoot(routes);