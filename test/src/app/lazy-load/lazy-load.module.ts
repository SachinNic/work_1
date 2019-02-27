import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
 
//import { LoginModule } from '../login/login.module';

const routes: Routes = [   
    //{path: 'login', loadChildren: '../login/login.module#LoginModule'},
    //{path: 'register', loadChildren: '../register/register.module#RegisterModule'},
    //{path: 'login', loadChildren: '../pages/login/login.module#LoginModule'},
    // {path: 'editor', loadChildren: '../editor/editor.module#EditorModule'},

    {path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule'},
]

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})
export class LazyLoadModule { }
