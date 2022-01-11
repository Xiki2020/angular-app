import { Component, Input, OnInit } from '@angular/core';
import { Post, User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.scss']
})
export class UsersInfoComponent implements OnInit {

  @Input() user!: User;
  @Input() posts!: Post[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getPosts(): void {
    this.userService.getPostByUserId(this.user.id).subscribe((posts: Post[]) => {
      this.posts = posts;
      console.log(posts);
    })
  }

}
