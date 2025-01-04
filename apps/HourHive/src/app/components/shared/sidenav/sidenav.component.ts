import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {

  navbar = [
    {'id':1 , Heading : 'Home', imgURl:'assets/homeIcon.svg' , navigationPath :'home' },
    {'id':2 , Heading : 'Messages', imgURl:'assets/msgIcon.svg',navigationPath :'messages' },
    {'id':3 , Heading : 'Tasks', imgURl:'assets/taskIcon.svg',navigationPath :'tasks' },
    {'id':4 , Heading : 'Member',imgURl:'assets/memberIcon.svg',navigationPath :'members' },
    {'id':5 , Heading : 'Settings' ,imgURl:'assets/settingsIcon.svg',navigationPath :'settings' }
  ] 


  projectList = [
    {'id':1 , Heading : 'Mobile App', colorCode:'#7AC555' },
    {'id':2 , Heading : 'Website Redesign', colorCode:'#FFA500' },
    {'id':3 , Heading : 'Design System', colorCode:'#E4CCFD' },
    {'id':4 , Heading : 'Wireframes' ,colorCode:'#76A5EA' },
    {'id':2 , Heading : 'Website Redesign', colorCode:'#FFA500' },
    {'id':3 , Heading : 'Design System', colorCode:'#E4CCFD' },
    {'id':4 , Heading : 'Wireframes' ,colorCode:'#76A5EA' }

    
  ] 


  activePath : string = '';
  toggleNavBar : boolean = false;
  constructor(
    private Router : Router
  ){}


  OpenNavigationState(path : string){
    console.log(path)
    this.activePath = path;
    this.Router.navigateByUrl(`app/${path}`)
  }

  toggle(){
    this.toggleNavBar = !this.toggleNavBar
  }
}


