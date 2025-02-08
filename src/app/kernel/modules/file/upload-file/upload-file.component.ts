import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KendoAngularModule } from '../../inputs/kendoAngular.module';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
  standalone: true,
  imports: [CommonModule,KendoAngularModule],
})
export class UploadFileComponent {
}