import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { ButtonComponent } from './pages/button/button.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { CrudComponent } from './pages/crud/crud.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { EmptyComponent } from './pages/empty/empty.component';
import { FileComponent } from './pages/file/file.component';
import { FloatLabelComponent } from './pages/floatlabel/floatlabel.component';
import { FormLayoutComponent } from './pages/formlayout/formlayout.component';
import { IconsComponent } from './pages/icons/icons.component';
import { InputComponent } from './pages/input/input.component';
import { InvalidStateComponent } from './pages/invalidstate/invalidstate.component';
import { ListComponent } from './pages/list/list.component';
import { MediaComponent } from './pages/media/media.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MiscComponent } from './pages/misc/misc.component';
import { OverlaysComponent } from './pages/overlays/overlays.component';
import { PanelsComponent } from './pages/panels/panels.component';
import { TableComponent } from './pages/table/table.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { TreeComponent } from './pages/tree/tree.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    // canActivate: [AuthGuard],
    // data: {roles: ['admin']},-
    children: [
      { path: '', component: DashboardComponent },
      { path: 'formlayout', component: FormLayoutComponent },
      { path: 'input', component: InputComponent },
      { path: 'floatlabel', component: FloatLabelComponent },
      { path: 'invalidstate', component: InvalidStateComponent },
      { path: 'button', component: ButtonComponent },
      { path: 'table', component: TableComponent },
      { path: 'list', component: ListComponent },
      { path: 'tree', component: TreeComponent },
      { path: 'panel', component: PanelsComponent },
      { path: 'overlay', component: OverlaysComponent },
      { path: 'media', component: MediaComponent },
      { path: 'menu', loadChildren: () => import('../admin/pages/menus/menus.module').then(m => m.MenusModule) },
      { path: 'message', component: MessagesComponent },
      { path: 'misc', component: MiscComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'file', component: FileComponent },
      { path: 'crud', component: CrudComponent },
      { path: 'timeline', component: TimelineComponent },
      { path: 'empty', component: EmptyComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'blocks', component: BlocksComponent },
      { path: 'documentation', component: DocumentationComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
