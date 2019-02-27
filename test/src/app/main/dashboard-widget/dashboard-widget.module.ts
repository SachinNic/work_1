import { NgModule } from '@angular/core';
import { UIModules } from '../uimodules/uimodule';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { DoughnutGraphComponent } from './doughnut-graph/doughnut-graph.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { DashcardComponent } from './dashcard/dashcard.component';

import { WeatherComponent } from './weather/weather.component';
import { SharePriceComponent } from './share-price/share-price.component';
//import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
//import { RoundProgressbarComponent } from './round-progressbar/round-progressbar.component'; 
//import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { SalesListComponent } from './sales-list/sales-list.component';
//import { D3UsaComponent } from './d3-usa/d3-usa.component';
//import { WorldMapComponent } from './world-map/world-map.component';

@NgModule({
  imports: [
    UIModules,
    //RoundProgressModule,
  ],
  declarations: [
      DashcardComponent, 
      LineGraphComponent, 
      BarGraphComponent, 
      
      DoughnutGraphComponent, 
      ProfileCardComponent,
      //PricingPlanComponent,
      WeatherComponent,
      SharePriceComponent,
      //RoundProgressbarComponent,
      SalesListComponent,
      //D3UsaComponent,
      //WorldMapComponent
    
      ],
  exports: [
      DashcardComponent, 
      LineGraphComponent, 
      BarGraphComponent, 
      DoughnutGraphComponent, 
      ProfileCardComponent,
      //PricingPlanComponent,
      WeatherComponent,
      SharePriceComponent,
      //RoundProgressbarComponent,
      SalesListComponent,
      //D3UsaComponent,
      //WorldMapComponent
  ]
})
export class DashboardWidgetModule { }
