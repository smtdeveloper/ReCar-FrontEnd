import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule , ReactiveFormsModule } from "@angular/forms" 
import { BrowserAnimationsModule} from "@angular/platform-browser/animations"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { UserComponent } from './components/user/user.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { from } from 'rxjs';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { VatWeekPipe } from './pipes/vat-week.pipe';
import { VatMoonPipe } from './pipes/vat-moon.pipe';

import {ToastrModule, ToastrService} from "ngx-toastr";
import { FooterComponent } from './components/footer/footer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component'


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    UserComponent,
    CustomerComponent,
    RentalComponent,
    CarimageComponent,
    VatAddedPipe,
    FilterPipePipe,
    CarDetailComponent,
    VatWeekPipe,
    VatMoonPipe,
    FooterComponent,
    PaymentComponent,
    CarAddComponent,
    RentalAddComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-right"
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
