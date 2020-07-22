import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { User } from './services/user';
import { UserListService } from './services/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  faSearch = faSearch;
  users$: Observable<User[]>;
  searchText: string;
  navbarOpen = false;

  constructor(private service: UserListService) {}

  ngOnInit() {
    this.users$ = this.service.getUsers();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
