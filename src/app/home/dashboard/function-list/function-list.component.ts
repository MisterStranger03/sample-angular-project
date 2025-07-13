import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface FunctionElement {
  functionCode: string;
  functionName: string;
  status: string;
}

const ELEMENT_DATA: FunctionElement[] = [
  { functionCode: 'FUNCTION_125', functionName: 'FUNCTION 125', status: 'Active' },
  { functionCode: 'FUNCTION_126', functionName: 'FUNCTION 126', status: 'Active' },
  { functionCode: 'FUNCTION_127', functionName: 'FUNCTION 127', status: 'Inactive' },
  { functionCode: 'LOREM_IPSUM_1', functionName: 'Lorem ipsum', status: 'Active' },
  { functionCode: 'LOREM_IPSUM_2', functionName: 'Lorem ipsum', status: 'Active' },
  { functionCode: 'LOREM_IPSUM_3', functionName: 'Lorem ipsum', status: 'Active' },
  { functionCode: 'LOREM_IPSUM_4', functionName: 'Lorem ipsum', status: 'Active' },
  { functionCode: 'LOREM_IPSUM_5', functionName: 'Lorem ipsum', status: 'Active' },
];

@Component({
  selector: 'app-function-list',
  templateUrl: './function-list.component.html',
  styleUrls: ['./function-list.component.css'],
  standalone: false
})
export class FunctionListComponent implements AfterViewInit {
  filterForm: FormGroup;
  displayedColumns: string[] = ['functionCode', 'functionName', 'status', 'action'];
  dataSource = new MatTableDataSource<FunctionElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      functionCode: [''],
      functionName: [''],
      status: ['']
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  clearFilters(): void {
    this.filterForm.reset();
    this.applyFilter();
  }

  search(): void {
    console.log('Searching with:', this.filterForm.value);
    this.applyFilter();
  }

  applyFilter(): void {
    const { functionCode, functionName, status } = this.filterForm.value;
    this.dataSource.data = ELEMENT_DATA.filter(item =>
      (functionCode ? item.functionCode.toLowerCase().includes(functionCode.toLowerCase()) : true) &&
      (functionName ? item.functionName.toLowerCase().includes(functionName.toLowerCase()) : true) &&
      (status ? item.status.toLowerCase() === status.toLowerCase() : true)
    );
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAction(action: string, element: FunctionElement): void {
    if (action === 'Delete') {
      const index = this.dataSource.data.indexOf(element);
      if (index > -1) {
        this.dataSource.data.splice(index, 1);
        this.dataSource.data = [...this.dataSource.data]; 
      }
    } else {
      console.log(`${action} clicked for`, element);
    }
  }
}