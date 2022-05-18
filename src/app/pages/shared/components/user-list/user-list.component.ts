import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../../models/User.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();
  public users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  public getUsers(): void {
    this.userService.getUsers().pipe(takeUntil(this.unsubscribe$)).subscribe(
      ans => {
        this.users = ans;
      }
    )
  }

}
