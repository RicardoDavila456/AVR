import { Routes } from '@angular/router';
import { BienvenidaComponent } from './views/bienvenida/bienvenida.component';
import { ConsultaIndividualComponent } from './views/consulta-individual/consulta-individual.component';
import { ConsultaGeneralComponent } from './views/consulta-general/consulta-general.component';

export const routes: Routes = [  { path: "", component: BienvenidaComponent },
{ path: "ConsultaIndividual", component: ConsultaIndividualComponent },
{ path: "ConsultaGeneral", component: ConsultaGeneralComponent }];
