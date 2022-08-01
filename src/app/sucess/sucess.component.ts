import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.scss']
})
export class SucessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    Swal.fire({
      title: 'Purchase Successful',
      html: '<div><p style="font-family:"Poppins";font-style: normal;font-weight: 300;font-size: 18px;line-height: 30px;">You will get your product soon! <br /><br/>to experience the spatial audio withadaptive EQ that tunes music to your ears.</p></div>',
      imageUrl: 'assets/_images/purchaseimg.png',
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: 'Custom image',
    })
    
  }

  

}