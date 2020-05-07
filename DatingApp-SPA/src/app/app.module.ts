import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FileUploadModule } from 'ng2-file-upload';
import { RouterModule } from '@angular/router';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { TabsModule } from 'ngx-bootstrap/tabs/ngx-bootstrap-tabs';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolver/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { TimeagoModule } from 'ngx-timeago';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker/ngx-bootstrap-datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination/ngx-bootstrap-pagination';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ListsResolver } from './_resolver/lists.resolver';
import { MessagesResolver } from './_resolver/messages.resolver';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';




export function tokenGetter() {
   return localStorage.getItem('token');
}


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent,
      MemberDetailComponent,
      MemberEditComponent,
      PhotoEditorComponent,
      MemberCardComponent,
      MemberMessagesComponent

   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      BsDropdownModule.forRoot(),
      BrowserAnimationsModule,
      BsDatepickerModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      FileUploadModule,
      TimeagoModule.forRoot(),
      PaginationModule.forRoot(),
      ButtonsModule.forRoot(),

      TabsModule.forRoot(),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      }

      )

   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      MemberDetailResolver,
      MemberListResolver, MemberEditResolver,
      PreventUnsavedChanges,
      ListsResolver,
      MessagesResolver
   ],

   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
