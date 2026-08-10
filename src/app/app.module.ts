import { DesignUtilityService } from './appServices/design-utility.service';

import { MyContainerComponent } from './myContainer/myContainer.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { Txtsec1Component } from './myContainer/txtsec1/txtsec1.component';
import { Txtsec2Component } from './myContainer/txtsec2/txtsec2.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './databind/class-style/class-style.component';
import { EventbindComponent } from './databind/eventbind/eventbind.component';
import { TwoWayBindComponent } from './databind/two-way-bind/two-way-bind.component';
import { NgifComponent } from './ngif/ngif/ngif.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFountComponent } from './page-not-found/page-not-fount.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { WashingMachineComponent } from './product/washing-machine/washing-machine.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { TelevisionComponent } from './product/television/television.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Card2Component } from './card2/card2.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { TestDirectiveDirective } from './appDirectives/test-directive.directive';
import { TestPipePipe } from './appPipes/test-pipe.pipe';
import { FilterPipe } from './appPipes/filter.pipe';
import { Contact2Component } from './contact2/contact2.component';
import { ApiComponent } from './api/api.component';
import { UxproductsService } from './appServices/uxproducts.service';



const appRoutes:Routes  = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path: 'buy-products',
    component: ParentComponent
  },
  {
    path: 'api',
    component: ApiComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path: 'contact2',
    component: Contact2Component
  },
  {
    path:'product',
    component: ProductComponent,
    children: [
      {
        path: 'laptop',
        component: LaptopComponent
      },
      {
        path: 'mobile',
        component: MobileComponent
      },
      {
        path: 'washing-machine',
        component: WashingMachineComponent
      },
      {
        path: 'television',
        component: TelevisionComponent
      }
    ]
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path: '**',
    component: PageNotFountComponent
  }
  ]
@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    Txtsec1Component,
    Txtsec2Component,
    DatabindComponent,
    ClassStyleComponent,
    EventbindComponent,
    TwoWayBindComponent,
    NgifComponent,
    NgSwitchComponent,
    NgForComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    HomeComponent,
    LoginComponent,
    PageNotFountComponent,
    LaptopComponent,
    WashingMachineComponent,
    MobileComponent,
    TelevisionComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    Card2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    TestDirectiveDirective,
    TestPipePipe,
    FilterPipe,
    Contact2Component,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TooltipModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [DesignUtilityService, UxproductsService],
  bootstrap: [AppComponent]
})


export class AppModule { }
