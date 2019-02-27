import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule} from '@angular/material/chips';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { Ng2OdometerModule } from 'ng2-odometer';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule,
          MatSelectModule,
         MatSortModule,
         MatCheckboxModule,
         MatTooltipModule,
         MatButtonToggleModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
    exports: [
      CommonModule,
      FlexLayoutModule,
      MatButtonModule,
      MatIconModule,
      MatTabsModule,
      MatToolbarModule,
      MatListModule,
      Ng2OdometerModule,
      //RoundProgressModule,
      MatMenuModule,
      MatChipsModule,
      MatProgressBarModule,
      FormsModule,
      ReactiveFormsModule,
      MatStepperModule,
      MatFormFieldModule,
      MatInputModule,
      MatExpansionModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatCheckboxModule,
      MatTooltipModule,
      MatButtonToggleModule,
      MatSelectModule,
      MatProgressSpinnerModule
    ],
})

export class UIModules{

}