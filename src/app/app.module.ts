import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { PortafolioComponent } from './content/portafolio/portafolio.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Examen2Component } from './content/examen2/examen2.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CrudService } from './servicios/crud.service';
import { Sesion } from './sesion/sesion';
import { Registro } from './registro/registro';
const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'portafolio', component: PortafolioComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    InicioComponent,
    PortafolioComponent,
    Examen2Component,
    Sesion,
    Registro,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDyAo-dpFWi6i7ZNW1QINWqfZRzLP9OATc',
      authDomain: 'gelectronics-f6ebd.firebaseapp.com',
      projectId: 'gelectronics-f6ebd',
      storageBucket: 'gelectronics-f6ebd.firebasestorage.app',
      messagingSenderId: '222151776160',
      appId: '1:222151776160:web:29b3ca6f33738f200c36c5',
      measurementId: 'G-YDSMGX6N5P',
    }),
    AngularFirestoreModule,
  ],
  providers: [CrudService],
  bootstrap: [AppComponent],
})
export class AppModule {}
