import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  response: string = "";
  apiUrl: string = "https://clean-room-builder-api.azurewebsites.net/api/buildcleanroom";
  localApiUrl: string = "http://localhost:5000/api/buildcleanroom";
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  createInfrastructure = () => {
    this.response = "Sending request to start building Clean Room";
    this.http.get(this.apiUrl).subscribe(res => {
      console.log(res);
      this.response = "Clean room build process started. (Note: It takes a while to complete the process)";
    }, error => {
      console.log(error);
      this.response = "Clean room build process failed to start. Please connect with System Admin.";
    })
  }
}
