import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent {
  isSidenavExpanded = true;
  activeMenu: string | null = null;

  navItems = [
    { name: 'Dashboard', icon: 'home', route: '/dashboard', children: [] },
    {
      name: 'Organization Management',
      icon: 'corporate_fare',
      children: [
        { name: 'Function', route: '/dashboard/function' },
        { name: 'Function Role', route: '#' },
        { name: 'Location', route: '#' },
        { name: 'Employee', route: '#' },
      ]
    },
    {
      name: 'User Management',
      icon: 'group',
      children: [
        { name: 'User', route: '#' },
        { name: 'System Role', route: '#' },
        { name: 'User Role Mapping', route: '#' },
      ]
    },
    {
      name: 'Product Management',
      icon: 'inventory_2',
      children: [
        { name: 'Product Group', route: '#' },
        { name: 'Product', route: '#' },
        { name: 'Product Variant', route: '#' },
        { name: 'Product Subvariant', route: '#' },
      ]
    },
    {
      name: 'LOV Management',
      icon: 'list_alt',
      children: [
        { name: 'LOV Group', route: '#' },
        { name: 'LOV', route: '#' },
        { name: 'LOV Value', route: '#' },
      ]
    },
    {
      name: 'Workflow Management',
      icon: 'lan',
      children: [
        { name: 'Workflow', route: '#' },
        { name: 'Task Group', route: '#' },
        { name: 'Events', route: '#' },
        { name: 'Event Task Mapping', route: '#' },
      ]
    },
    { name: 'Tools', icon: 'build', route: '#', children: [] },
  ];

  constructor(private router: Router, private service: AuthService) { }

  toggleSidenav(): void {
    this.isSidenavExpanded = !this.isSidenavExpanded;
  }

  toggleMenu(menuName: string): void {
    this.activeMenu = this.activeMenu === menuName ? null : menuName;
  }
  
  logout(): void {
    console.log('Logging out...');
    this.service.logout();
  }
}