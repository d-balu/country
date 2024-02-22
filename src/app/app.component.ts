import { HttpClient } from '@angular/common/http';
import { Component, ɵNG_ELEMENT_ID } from '@angular/core';
import { CountryService } from './country.service';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  country:any[]=[]
 modal:any
 btn:any
  
  constructor(private xyz:CountryService)
  {
    this.xyz.getData().subscribe((data:any)=> this.country=data)

  }
OpenModal(){

  
 // Get the modal


// Get the button that opens the modal


// When the user clicks on the button, open the modal
this.btn.onclick = () => {
  this.modal.style.display = "block";
}
}
}
