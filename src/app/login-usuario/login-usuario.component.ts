import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login-usuario',
  standalone: true,
  imports: [RouterLink,

  ],
  templateUrl: './login-usuario.component.html',
  styleUrl: './login-usuario.component.css'
})
export class LoginUsuarioComponent {
  readonly apiUrl = 'https://66e9c9cb87e41760944abebf.mockapi.io/api/usuarios';  
  email: string = '';
  senha: string = '';

  constructor(private http:HttpClient) {}
  loginUser() {
    this.http.get(`${this.apiUrl}/users`)
      .subscribe(resultado => console.log(resultado));
  }
}


