import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardCrmComponent } from '../main/dashboard-crm/dashboard-crm.component';

export const appRoutes: Routes = [{
    path: '', component: DashboardComponent, children: [
        { path: 'dpage', component: DashboardCrmComponent },
        { path: 'ds', loadChildren: '../main/datadownload/datadownload.module#DatadownloadModule' },
        { path: 'us', loadChildren: '../main/upload/upload.module#uploadModule'}
        //{ path: 'material-widgets', loadChildren: '../material-widgets/material-widgets.module#MaterialWidgetsModule' },
        //{ path: 'tables', loadChildren: '../tables/tables.module#TablesModule' },
        //{ path: 'maps', loadChildren: '../maps/maps.module#MapsModule' },
        //{ path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' },
        // { path: 'chats', loadChildren: '../chats/chat.module#ChatsModule' }, // fix this
        //{ path: 'mail', loadChildren: '../mail/mail.module#MailModule' }, // fix this
        //{ path: 'pages', loadChildren: '../pages/pages.module#PagesModule' },
        //{ path: 'forms', loadChildren: '../forms/forms.module#FormModule' }, //fix this
        //{ path: 'guarded-routes', loadChildren: '../guarded-routes/guarded-routes.module#GuardedRoutesModule' },
        // { path: 'editor', loadChildren: '../editor/editor.module#EditorModule' }, 
        //{ path: 'scrumboard', loadChildren: '../scrumboard/scrumboard.module#ScrumboardModule' },
    ]
}];
