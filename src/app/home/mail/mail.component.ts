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
  mailForm: FormGroup;

  /**
   * @type array
   */
  form = {
    options: {
      floatLabel: "never"
    }
  };

  /**
   * @type array
   */
  _background = {
    path: "/assets/images/fundo_padrao_formulario.jpg",
    color: "white"
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

  public sendMail() {
    let email = {
      sendTo: "geral@repa.pt",
      name: this.formControls.name.value,
      subject: this.formControls.subject.value,
      place: this.formControls.place.value,
      body: this.formControls.body.value
    };

    email.body =
      "[Contacto REPA: " +
      email.name +
      " de " +
      email.place +
      "]\r\n" +
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
