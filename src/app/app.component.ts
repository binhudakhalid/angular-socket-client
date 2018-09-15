import { Component, OnInit } from '@angular/core';
(window as any).global = window;
//import './globdal-shim.ts';
import * as socketIo from 'socket.io-client';
//(window as any).global = window;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'NgSocket';
  

  ngOnInit(): void {
    (window as any).global = window;
    const socket = socketIo('htt.://localhost:3000');


    socket.on('hello', (data) => console.log(data));
    //throw new Error("Method not implemented.");
  }
  
}
