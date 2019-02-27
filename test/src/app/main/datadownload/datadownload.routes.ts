import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatadownloadComponent } from './datadownload.component';
//import { FeatureTableComponent } from './feature-table/feature-table.component';
//import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';

const routes: Routes = [
  	{ path: 'ds', component: DatadownloadComponent , data: { animation: 'fixed' }},
  	//{ path: 'featured', component: FeatureTableComponent ,data: { animation: 'featured' }},
  	//{ path: 'responsive', component: ResponsiveTableComponent ,data: { animation: 'responsive' }}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  	],
  exports: [
    RouterModule
  ]
})
export class DatadownloadRouteModule {}