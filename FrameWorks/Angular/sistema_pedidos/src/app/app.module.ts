import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { PedidosFormComponent } from './components/pedidos-form/pedidos-form.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { ListComponent } from './components/pedido/list/list.component';
import { FormsModule } from '@angular/forms';
import { PedidoListComponent } from './components/components/pedido-list/pedido-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteFormComponent,
    PedidosFormComponent,
    ProdutoFormComponent,
    ListComponent,
    PedidoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
