import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [CommonModule ,FormsModule ,CdkDropList, CdkDrag ],
  templateUrl: './taskTable.component.html',
  styleUrl: './taskTable.component.css',
})
export class TaskTableComponent {

  

  // taskData : any = [

  //   {
  //     "TaskName": "Design Homepage",
  //     "DueDate": "2024-12-31",
  //     "collaboration": "Team A",
  //     "Project": "Website Redesign",
  //     "tag": "High Priority"
  //   },
  //   {
  //     "TaskName": "Prepare Budget Report",
  //     "DueDate": "2024-12-28",
  //     "collaboration": "Finance Team",
  //     "Project": "Annual Review",
  //     "tag": "Urgent"
  //   },
  //   {
  //     "TaskName": "Test New Features",
  //     "DueDate": "2025-01-10",
  //     "collaboration": "QA Team",
  //     "Project": "Mobile App Update",
  //     "tag": "Testing"
  //   },
  //   {
  //     "TaskName": "Client Meeting",
  //     "DueDate": "2024-12-27",
  //     "collaboration": "Sales Team",
  //     "Project": "Key Account Management",
  //     "tag": "Important"
  //   },
  //   {
  //     "TaskName": "Content Review",
  //     "DueDate": "2024-12-29",
  //     "collaboration": "Marketing Team",
  //     "Project": "Blog Launch",
  //     "tag": "Medium Priority"
  //   }
  // ]
  TableHeaderCol : any = [
    {label :'Task Name', Key :'TaskName'},
    {label :'Due Date', Key :'DueDate'},
    {label :'Collaboration', Key :'collaboration'},
    // {label :'Project', Key :'Project'},
    {label :'tag', Key :'tag'},
    
  ] 

  taskData: any = [
    {
      "Project": "Website Redesign",
      "Tasks": [
        {
          "TaskName": "Design Homepage",
          "DueDate": "2024-12-31",
          "collaboration": "Team A",
          "tag": "High Priority"
        },
        {
          "TaskName": "Design Mobile Layout",
          "DueDate": "2025-01-05",
          "collaboration": "Team A",
          "tag": "High Priority"
        },
        {
          "TaskName": "Update Homepage Content",
          "DueDate": "2025-01-07",
          "collaboration": "Content Team",
          "tag": "Medium Priority"
        }
      ]
    },
    {
      "Project": "Annual Review",
      "Tasks": [
        {
          "TaskName": "Prepare Budget Report",
          "DueDate": "2024-12-28",
          "collaboration": "Finance Team",
          "tag": "Urgent"
        }
      ]
    },
    {
      "Project": "Mobile App Update",
      "Tasks": [
        {
          "TaskName": "Test New Features",
          "DueDate": "2025-01-10",
          "collaboration": "QA Team",
          "tag": "Testing"
        },
        {
          "TaskName": "Deploy Beta Version",
          "DueDate": "2025-01-15",
          "collaboration": "Dev Team",
          "tag": "Critical"
        }
      ]
    },
    {
      "Project": "Key Account Management",
      "Tasks": [
        {
          "TaskName": "Client Meeting",
          "DueDate": "2024-12-27",
          "collaboration": "Sales Team",
          "tag": "Important"
        },
        {
          "TaskName": "Prepare Client Presentation",
          "DueDate": "2024-12-30",
          "collaboration": "Sales Team",
          "tag": "Important"
        }
      ]
    },
    {
      "Project": "Blog Launch",
      "Tasks": [
        {
          "TaskName": "Content Review",
          "DueDate": "2024-12-29",
          "collaboration": "Marketing Team",
          "tag": "Medium Priority"
        },
        {
          "TaskName": "SEO Optimization",
          "DueDate": "2025-01-10",
          "collaboration": "Marketing Team",
          "tag": "Medium Priority"
        }
      ]
    }
  ];
  
  
  
  constructor(){}


  onDrop(event: CdkDragDrop<any[]>, projectIndex: number) {
   
    const project = this.taskData[projectIndex];
    // Move the task within the project
    moveItemInArray(project.Tasks, event.previousIndex, event.currentIndex);
  }


}
