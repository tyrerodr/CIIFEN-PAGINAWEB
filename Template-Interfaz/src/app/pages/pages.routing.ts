import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'database', pathMatch: 'full' },
            //{ path: 'index', loadChildren: './index/index.module#IndexModule' },
            //{ path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
            { path: 'database', loadChildren: './database/database.module#DatabaseModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            //{ path: 'form', loadChildren: './form/form.module#FormModule' },
            //{ path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            //{ path: 'ui', loadChildren: './ui/ui.module#UIModule' },
            //{ path: 'table', loadChildren: './table/table.module#TableModule' },
            //{ path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' },
            { path: 'digitalizador', loadChildren: './digitalizador/digitalizador.module#DigitalizadorModule' },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
