import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { AuthGuard } from './auth.guard';
import { BankingComponent } from './banking/banking.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ExamplesComponent } from './examples/examples.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { InteractionComponent } from './interaction/interaction.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { NotifyGuard } from './notify.guard';
import { OrderFoodComponent } from './order-food/order-food.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { StoreComponent } from './store/store.component';
import { VehicleNewComponent } from './vehicle-new/vehicle-new.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard],
    children:[
      {path:"create",component:CreateComponent},
      {path:"interpolation",component:InterpolationComponent},
      {path:"event-binding",component:EventBindingComponent},
      {path:"interaction",component:InteractionComponent},
      {path:"create-account",component:CreateAccountComponent},
      {path:"account-summary",component:AccountSummaryComponent},
      {path:"examples",component:ExamplesComponent},
      {path:"registration-form",component:RegistrationFormComponent},
      {path:"vehicle",component:VehicleComponent},
      {path:"vehicle-new",component:VehicleNewComponent},
      {path:"banking",component:BankingComponent},
      {path:"store",component:StoreComponent},
      {path:"form-details",component:FormDetailsComponent},
      {path:"order-food",component:OrderFoodComponent,canDeactivate:[NotifyGuard]},
    ]
  },

  {path:"",component:LoginComponent},
  {path:"**",component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
