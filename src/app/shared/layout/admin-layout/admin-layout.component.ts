import { Component } from '@angular/core';
 import {  RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    standalone: true,
    styleUrls: ['./admin-layout.component.scss'],
    imports: [CommonModule,
    RouterOutlet,
    HeaderComponent,
    SidebarComponent
]
})
export class AdminLayoutComponent {
 

}
