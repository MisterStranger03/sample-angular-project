import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PendingFunctionElement {
  functionCode: string;
  functionName: string;
  status: string;
}

const PENDING_DATA: PendingFunctionElement[] = [
  { functionCode: '0', functionName: 'Lorem ipsum', status: 'Active' },
  { functionCode: '1', functionName: 'Lorem ipsum', status: 'Active' },
  { functionCode: '2', functionName: 'Lorem ipsum', status: 'Active' },
  { functionCode: '3', functionName: 'Lorem ipsum', status: 'Active' },
  { functionCode: '4', functionName: 'Lorem ipsum', status: 'Active' },
];

@Component({
  selector: 'app-function-approval',
  templateUrl: './function-approval.component.html',
  styleUrls: ['./function-approval.component.css'],
  standalone: false
})
export class FunctionApprovalComponent implements AfterViewInit {

  displayedColumns: string[] = ['functionCode', 'functionName', 'status', 'action'];
  dataSource = new MatTableDataSource<PendingFunctionElement>(PENDING_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onView(element: PendingFunctionElement): void {
    // console.log('Viewing:', element);
  }

  onDelete(element: PendingFunctionElement): void {
    console.log('Deleting/Rejecting:', element);
    this.dataSource.data = this.dataSource.data.filter(item => item !== element);
  }

  approveAll(): void {
    // console.log('Approving all records...');
  }

  rejectAll(): void {
    // console.log('Rejecting all records...');
  }
}