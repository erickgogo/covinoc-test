import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prototype-test';
  showSpinner: boolean = false;

  constructor(private loaderService: LoaderService) {
    
  }
  ngOnInit(): void {
    this.loaderService.loader$.subscribe((show:boolean) => {
      setTimeout(() => {
        this.showSpinner = show;
      });
    });
  }
}
