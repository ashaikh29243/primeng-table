import { Component } from '@angular/core';
interface Car {
  vin?;
  vin2?;
  year?;
  brand?;
  color?;
  price?;
  saleDate?;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';
  cars: Car[] = [
    { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff", "vin2": "dsad231ff" },
    { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345", "vin2": "dsad231ff" },
    { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr", "vin2": "dsad231ff" },
    { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh", "vin2": "dsad231ff" },
    { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34", "vin2": "dsad231ff" },
    { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj", "vin2": "dsad231ff" },
    { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr", "vin2": "dsad231ff" },
    { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34", "vin2": "dsad231ff" },
    { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5", "vin2": "dsad231ff" },
    { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s", "vin2": "dsad231ff" }
  ];
  

  scrollableCols: any[] = [
    { field: 'vin2', header: 'Vin 2' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' },
  ];
  frozenCols: any[] = [
    { field: 'vin', header: 'Vin' },
  ];
}
