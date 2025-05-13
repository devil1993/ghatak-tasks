import { Component, signal } from '@angular/core';
import { NewTaskComponent } from '../tasks/new-task/new-task.component';

@Component({
  selector: 'app-dashboard',
  imports: [NewTaskComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  displayNewForm = signal(false);
  createNewTask(){
    this.displayNewForm.set(true);
  }
}
