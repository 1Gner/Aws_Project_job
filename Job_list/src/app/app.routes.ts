import { Routes } from '@angular/router';
import { PageJobComponent } from './components/page-job/page-job.component';

export const routes: Routes = [

    { path: 'jobList', component: PageJobComponent  },
    { path: '',  component: PageJobComponent },
    { path: '**', redirectTo: '/jobList' } 
];
