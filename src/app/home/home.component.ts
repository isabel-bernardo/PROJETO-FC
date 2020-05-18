import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms";

import { mimeType } from "../posts/post-create/mime-type.validator";



@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})


export class HomeComponent implements OnInit {
  form: FormGroup;
  totalAngularPackages;
  teste = '';
  saida = '';


  constructor(private http: HttpClient) {
  }


  ngOnInit() {

  }

  onClick(text: HTMLTextAreaElement){
    this.saida ='';

    //this.http.get<any>('http://scielo.org/api/v1/shorten?url=http://www.scielo.org/'+text.value)
    this.http.get<any>('http://newsapi.org/v2/everything?q='+text.value+'&sortBy=relevancy&apiKey=82387374b5dd401bbf5bede554da0d7c')
    .subscribe(data => {
    this.totalAngularPackages = data;
    for (let index = 0; index < 10; index++) {
      this.saida += this.totalAngularPackages.articles[index].description;
    }
  });
}

}
