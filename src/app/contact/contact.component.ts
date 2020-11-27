import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      senderName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(720)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  sendMail() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    alert('Funcionalidade em manutenção. Favor enviar sua mensagem para contato@Angularflix.com.br. Obrigado! :)');
  }
}
