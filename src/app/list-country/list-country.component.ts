import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { CountryService } from '../services/country.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.scss']
})
export class ListCountryComponent implements AfterViewInit {
  countries: any[] = ['name','sortname','phoneCode']; 
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

 
  constructor(private countryService: CountryService) { }

  ngAfterViewInit(): void {
   
    this.fetchCountries();
  }

  fetchCountries() {
    this.countryService.getCountries().subscribe( {
      next:(data)=>{
        this.dataSource= new MatTableDataSource(data.countries);
        this.dataSource.sort= this.sort;
        this.dataSource.paginator=this.paginator;
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
