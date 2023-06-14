import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WatchComponent } from './watch/watch.component';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeService } from './youtube.service';
import { SafePipe } from './safe.pipe';


export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'watch', component: WatchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WatchComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
  
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, useHash: false } // <-- debugging purposes only
    ),
  ],
  providers: [
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
