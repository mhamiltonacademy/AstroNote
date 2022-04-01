import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-drag-drop-tasks',
    templateUrl: './drag-drop-tasks.component.html',
    styleUrls: ['./drag-drop-tasks.component.css']
})
export class DragDropTasksComponent {

    todo = ['Edit project name ability', 'Search bar functionality', 'Nap a 3rd time', 'Fix Add Collaborators button'];

    progress = ['Edit task functionality', 'Add task functionality', 'Nap again'];

    done = ['Single page CSS styling', 'Add Edit Buttons', 'Nap', 'Check e-mail'];

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
                // console.log("SwitchCase:", 'To Do list')
                this.todo = this.todo.filter(t => t !== task);
                break;
            case 'progress':
                // console.log("SwitchCase:", 'In Progress list')
                this.progress = this.progress.filter(t => t !== task);
                break;
            case 'done':
                // console.log("SwitchCase:", 'Done list')
                this.done = this.done.filter(t => t !== task);
                break;
        }
    }
}
