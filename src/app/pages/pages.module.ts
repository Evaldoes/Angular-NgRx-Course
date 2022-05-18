import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UserService } from './shared/services/user.service';
import { UserFormComponent } from './shared/components/user-form/user-form.component';


@NgModule({
  declarations: [
    UserFormComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  providers: [UserService]
})
export class PagesModule { }
