import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Observable } from 'rxjs';
=======
>>>>>>> 4a407fb58e57384b5d2fceb4e0b1618d04f7aafd

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-project-1';
<<<<<<< HEAD
  responseData$: Observable<any> | undefined;
  loadData: boolean = false;

  constructor(private http: HttpClient){}

  getData(){
    this.responseData$ = this.http.get('http://jsonplaceholder.typicode.com/users');
    this.loadData = true;
=======
  responseData: any;
  loadData: boolean = false;
  constructor(private http: HttpClient){}

  getData(){
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe
    ((data)=>{
      this.responseData = data;
      this.loadData = true;
      // console.log(data);
    })
>>>>>>> 4a407fb58e57384b5d2fceb4e0b1618d04f7aafd
  }
}
