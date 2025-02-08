import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IntlModule } from "@progress/kendo-angular-intl";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { IconsModule } from "@progress/kendo-angular-icons";
import { KENDO_LISTVIEW, ListViewModule } from '@progress/kendo-angular-listview';
import { DialogsModule } from "@progress/kendo-angular-dialog";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IntlModule,
    ButtonsModule,
    DateInputsModule,
    IconsModule,
    ListViewModule, 
    DialogsModule,
    
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IntlModule,
    ButtonsModule,
    DateInputsModule,
    IconsModule,
    ListViewModule,
    DialogsModule,
    
  ]
})
export class KendoAngularModule { }
