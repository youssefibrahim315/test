import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_PAGE } from '../../../../../core/constances/routes.const';
import { StorageService } from '../../../../../core/api-services/storage.service';
import { Keys } from '../../../../../core/constances/keys.const';
import {
  selectUserDetails,
  UserActions,
} from '../../../../../core/store/users';
import { UserService } from '../../../../../core/api-services/user.service';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ButtonComponent } from '../../../../../kernel/modules/inputs/components/button/button.component';
import { tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  providers: [DatePipe],
  imports: [FormsModule, CommonModule, ButtonComponent],
})
export class HeaderComponent implements OnInit {
  private readonly storageService = inject(StorageService);
  private readonly router = inject(Router);
  store = inject(Store);
  userService = inject(UserService);
  profile$ = this.store.select(selectUserDetails).pipe(tap(res=>console.log(res)))


  ngOnInit() {
    this.getData();
  }
  getData() {
    this.store.dispatch(
      UserActions.getUserDetails({ email:localStorage.getItem(Keys.Email) })
    );
    this.profile$ = this.store.select(selectUserDetails).pipe(tap(res=>console.log(res)))

  }
  logout() {
    this.storageService.removeLocal(Keys.Token);
    this.router.navigateByUrl(LOGIN_PAGE);
  }
}
