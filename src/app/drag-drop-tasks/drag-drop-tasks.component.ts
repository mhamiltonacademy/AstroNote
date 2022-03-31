import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-drag-drop-tasks',
    templateUrl: './drag-drop-tasks.component.html',
    styleUrls: ['./drag-drop-tasks.component.css']
})
export class DragDropTasksComponent {

    todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

    progress = ['Nap', 'Nap again', 'Nap a 3rd time'];

    done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }
    }

    addTask() {
        console.log("ADDING a task")
    }

    editTask() {
        console.log("EDITING a task")
    }

    deleteTask(task: string, taskList: string) {
        switch (taskList) {
            case 'todo':
                console.log("SwitchCase:", 'To Do list')
                this.todo = this.todo.filter(t => t !== task);
                break;
            case 'progress':
                console.log("SwitchCase:", 'In Progress list')
                this.progress = this.progress.filter(t => t !== task);
                break;
            case 'done':
                console.log("SwitchCase:", 'Done list')
                this.done = this.done.filter(t => t !== task);
                break;
        }
    }
}
