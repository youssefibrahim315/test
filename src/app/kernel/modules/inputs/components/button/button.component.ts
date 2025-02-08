import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { KendoAngularModule } from '../../kendoAngular.module';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [CommonModule, KendoAngularModule],
})
export class ButtonComponent {
  @Input() color: any;
  @Input() disabled = false;
  @Output() clickAction = new EventEmitter();
  @Input() loading = false;
  @Input() class: any = 'cust-button';
  @Input() iconColor = '';
  @Input() icon!: string;
  @Input() isOutlined: boolean = false;
  @Input() label: any;
}
