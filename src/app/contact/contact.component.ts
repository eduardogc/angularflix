import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import WeDeploy from 'wedeploy';

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

    alert('Funcionalidade em manutenção. Favor enviar sua mensagem para contato@Angularflix.com.br. Obrigado! :)')

    // WeDeploy
    //   .email('dakilac3p0-Angularflixapp.wedeploy.io')
    //   .auth('d8f4be46-ed49-4978-a882-ed60305fee27')
    //   .from(this.f.email.value)
    //   .to('contato@Angularflix.com.br')
    //   .subject(this.f.subject.value)
    //   .message('<b>De: ' + this.f.senderName.value + '</b><br><br><br>' + this.f.message.value)
    //   .send()
    //   .then(emailId => {
    //     alert('E-mail enviado com sucesso! ' + emailId);
    //   })
    //   .catch(error => {
    //     alert('Falha ao enviar o e-mail.');
    //   });
  }
}
