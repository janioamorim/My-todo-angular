<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Components/Template/header/header.service';
=======
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
>>>>>>> 07ef444fa6766eb8f62046ed0ddf3b531086a9c0

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

}
