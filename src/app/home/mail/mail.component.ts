import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  form = {
    options: {
      floatLabel: "never"
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
