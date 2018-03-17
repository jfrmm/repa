import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-mail",
  templateUrl: "./mail.component.html",
  styleUrls: ["./mail.component.css"]
})
export class MailComponent implements OnInit {
  /**
   * @type FormGroup
   */
  public mailForm: FormGroup;

  form = {
    options: {
      floatLabel: "never"
    }
  };

  get formControls() {
    return this.mailForm.controls;
  }

  constructor(private _fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  private createForm() {
    this.mailForm = this._fb.group({
      name: [null, [Validators.required]],
      subject: [null, [Validators.required]],
      place: [null, [Validators.required]],
      body: [null, [Validators.required]]
    });
  }

  // get name() { return this.mailForm.get('name'); }

  public sendMail() {
    // let fc = this.formControls
    let email = {
      sendTo: "geral@repa.com",
      name: this.formControls.name.value,
      subject: this.formControls.subject.value,
      place: this.formControls.place.value,
      body: this.formControls.body.value
    };

    email.body =
      "[Contacto pelo site de " +
      email.name +
      ", localização " +
      email.place +
      "]\n" +
      email.body;

    window.location.href =
      "mailto:" +
      email.sendTo +
      "?subject=" +
      encodeURIComponent(email.subject) +
      "&body=" +
      encodeURIComponent(email.body);
  }
}
