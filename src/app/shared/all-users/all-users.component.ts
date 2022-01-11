import { Component, OnInit } from '@angular/core';
import { Post, User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  users: User[] = [];
  user!: User;
  posts: Post[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((users: User[]) => {
      this.users = users;
    })
  }

  getUserInfo(id: number): void {
    this.posts = [];
    this.userService.getById(id).subscribe((user: User) => {
      this.user = user;
    })
  }

}
