import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  
  formattedDate: string = '';
  greeting: string = '';
  constructor(){}
  

  ngOnInit(): void {
      this.setDateAndGreeting()
      setInterval(() => this.setDateAndGreeting(), 60000);
  }


  setDateAndGreeting() {
    const date = new Date();

    // Options for formatting the date (DAY,MONTH DATE)
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    // Format the date
    this.formattedDate = date.toLocaleDateString("en-US", options);
    
    // Determine the greeting based on the time
    const hour = date.getHours();
    this.greeting = "Good Morning!";
    if (hour >= 12 && hour < 18) {
        this.greeting= "Good Afternoon!";
    } else if (hour >= 18) {
      this.greeting = "Good Evening!";
    }

    
    
}

}
