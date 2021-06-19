import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentoPageComponent } from './components/atendimento-page/atendimento-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { OrixasPageComponent } from './components/orixas-page/orixas-page.component';

const routes: Routes = [{
  path: '',
  component: MenuTemplateComponent,
  children: [
    {
      path: '',
      component: HomePageComponent
    },
    {
      path: 'atendimento',
      component: AtendimentoPageComponent
    },
    {
      path: 'orixas',
      component: OrixasPageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
