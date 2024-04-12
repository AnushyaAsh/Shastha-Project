import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { UniversityService } from '../services/university.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-list-univeristy',
  templateUrl: './list-univeristy.component.html',
  styleUrl: './list-univeristy.component.scss'
})
export class ListUniveristyComponent implements AfterViewInit{
  universities: any[] = ['name', 'country','alpha_two_code','web_pages'];
  dataSource!: MatTableDataSource<any>;
  loading: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private universityService: UniversityService) { }

  ngAfterViewInit(): void {
    this.fetchUniversities();
  }

  fetchUniversities(): void {
    this.universityService.getUniversity().subscribe({
      next:(res)=>{
        this.dataSource= new MatTableDataSource(res);
        this.dataSource.sort= this.sort;
        this.dataSource.paginator=this.paginator;
        this.loading = false;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
