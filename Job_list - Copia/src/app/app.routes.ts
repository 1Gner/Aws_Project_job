import { Routes } from '@angular/router';
import path from 'path';
import { PageJobComponent } from './components/page-job/page-job.component';

export const routes: Routes = [

    { path: 'jobList', component: PageJobComponent  },
    { path: '', redirectTo: '/jobList', pathMatch: 'full' },
    { path: '**', redirectTo: '/jobList' } 
];
