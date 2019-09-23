import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WatchComponent } from './watch/watch.component';

export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'watch', component: WatchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WatchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, useHash: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
