// user.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  companyName: string;
  industry: string;
  companySize: number;
  location: string;
  website: string;
  contactEmail: string;
  contactPhone: string;
  password: string;
  confirmPassword: string;
  logoPath: string;  // Ajout de la variable pour le chemin du logo

  onSubmit() {
    console.log('Formulaire soumis !');
  }

  onFileChange(event: any) {
    console.log('Changement de fichier détecté !');
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      // Vous pouvez utiliser le chemin du fichier ici, par exemple :
      this.logoPath = URL.createObjectURL(file);
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
