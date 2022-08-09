import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MAIN_MENU_TABS } from 'src/app/models/app-constants';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public items: MenuItem[] = [];  
  public activeItem!: MenuItem;

  private readonly navigate = (path: string) => this.router.navigateByUrl(path);

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initMenu();
  }

  private initMenu(): void {
    this.items = MAIN_MENU_TABS.map(t => ({...t, command: () => this.navigate(t.label.toLowerCase())}));
    this.activeItem = this.items[0];
  }

}
