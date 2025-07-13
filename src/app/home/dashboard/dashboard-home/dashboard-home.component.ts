import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css'],
  standalone: false
})
export class DashboardHomeComponent {

  dashboardSections = [
    {
      title: 'Organization Management',
      cards: [
        { title: 'Function', icon: 'business_center', route: '/dashboard/function' },
        { title: 'Function Role', icon: 'supervised_user_circle', route: '#' },
        { title: 'Location', icon: 'location_on', route: '#' },
        { title: 'Employee', icon: 'badge', route: '#' },
      ]
    },
    {
      title: 'User Management',
      cards: [
        { title: 'User', icon: 'person', route: '#' },
        { title: 'System Role', icon: 'security', route: '#' },
        { title: 'User Role Mapping', icon: 'rule', route: '#' },
      ]
    },
    {
      title: 'Product Management',
      cards: [
        { title: 'Product Group', icon: 'widgets', route: '#' },
        { title: 'Product', icon: 'inventory', route: '#' },
        { title: 'Product Variant', icon: 'style', route: '#' },
        { title: 'Product Subvariant', icon: 'category', route: '#' },
      ]
    },
    {
      title: 'LOV Management',
      cards: [
        { title: 'LOV Group', icon: 'view_list', route: '#' },
        { title: 'LOV', icon: 'article', route: '#' },
        { title: 'LOV Value', icon: 'fact_check', route: '#' },
      ]
    },
    {
      title: 'Workflow and Access Control',
      cards: [
        { title: 'Workflow', icon: 'account_tree', route: '#' },
        { title: 'Task Group', icon: 'assignment', route: '#' },
        { title: 'Events', icon: 'event', route: '#' },
        { title: 'Event Task Mapping', icon: 'link', route: '#' },
      ]
    }
  ];

  constructor(private router: Router) { }

  navigateTo(route: string): void {
    if (route && route !== '#') {
      this.router.navigate([route]);
    }
  }
}