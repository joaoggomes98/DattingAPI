import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { consumerAfterComputation } from '@angular/core/primitives/signals';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  private http = inject(HttpClient);
  protected readonly title = 'Datting APP';
  protected members = signal<any>([]);
  //constructor(private http: HttpClient){}
  
  
  async ngOnInit(): Promise<void> {
    this.members.set(await this.getMembers())
  }

  async getMembers(){
    try {
      return lastValueFrom(this.http.get('https://localhost:5001/api/members'));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
