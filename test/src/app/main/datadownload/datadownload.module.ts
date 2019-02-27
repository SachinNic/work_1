import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DatadownloadComponent } from './datadownload.component';
import { DatadownloadRouteModule } from './datadownload.routes';
import { DataService } from '../service/dataservice';
import { UIModules } from '../uimodules/uimodule'

@NgModule(
    {
        declarations: [DatadownloadComponent],
        imports: [UIModules, HttpClientModule, DatadownloadRouteModule],
        exports: [],
        providers: [DataService]
    }
)

export class DatadownloadModule {



}