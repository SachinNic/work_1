import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { uploadComponent } from './upload.component';
import { uploadRouteModule } from './upload.routes';
import { DataService } from '../service/dataservice';
import { UIModules } from '../uimodules/uimodule'

@NgModule(
    {
        declarations: [uploadComponent],
        imports: [UIModules, HttpClientModule, uploadRouteModule],
        exports: [],
        providers: [DataService]
    }
)

export class uploadModule {



}