import { Route } from '@angular/router';
import { LandingComponent } from './layout/landing/landing.component';
import { LoginComponent } from './layout/auth/login/login.component';
import { SignupComponent } from './layout/auth/signup/signup.component';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MemberComponent } from './components/member/member.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TaskComponent } from './components/task/task.component';

export const appRoutes: Route[] = [
    {path:'' , component:LandingComponent},
    {path:'login', component : LoginComponent },
    {path:'signup', component : SignupComponent},
    {path : 'app',component:HomeComponent , 
         children: [
                { path: 'home', component: DashboardComponent },
                { path: 'members', component: MemberComponent },
                { path: 'messages', component: MessagesComponent },
                { path: 'settings', component: SettingsComponent },
                { path: 'tasks', component: TaskComponent },
                
            ] 
}

];
