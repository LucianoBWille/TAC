import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { catchError } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(private userService: UserService) { 
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email] )
    })
  }

  ngOnInit(): void {
  }

  public save() {
    console.log(this.form)

    //adicionar a API para salvar o usuário
    const user = new User()
    user.first_name = this.form.value.nome
    user.last_name = this.form.value.sobrenome
    user.email = this.form.value.email

    this.userService.save(user)
    .pipe(catchError(err => {
      console.log(err)
      alert('Deu erro!')
      throw new Error(err)
    }))
    .subscribe( (res) => {
      alert("Usuário salvo com sucesso!")
      console.log(res)
    })
  }

  public cancel() {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email] )
    })
  }

}
