import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component';

@Component({
    selector: 'app-drag-drop-tasks',
    templateUrl: './drag-drop-tasks.component.html',
    styleUrls: ['./drag-drop-tasks.component.css']
})
export class DragDropTasksComponent {
    constructor(private dialog: MatDialog) { }

    todo = ['Edit project name ability', 'Search bar functionality', 'Nap a 3rd time', 'Fix Add Collaborators button'];

    progress = ['Edit task functionality', 'Add task functionality', 'Nap again'];

    done = ['Single page CSS styling', 'Add Edit Buttons', 'Nap', 'Check e-mail'];

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            // if it's moved within the same list. i.e. if the order of tasks changes
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            // if it's moved to a different list, then update the list
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }
    }

    // editDescription: string, editDeadline: Date, editPriority: string, editProgress: number, editEngineerId: number, editProjectId: number
    openDialog() {
        // Dialog Settings
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true; // user will not be able to close dialog by clicking outside of it
        dialogConfig.autoFocus = true; // focus will automatically be set on the first form field
        dialogConfig.data = { // data that can be passed into the dialog (use this for editTask)
            name: undefined,
            description: undefined,
            deadline: undefined,
            priority: undefined,
            progress: undefined,
            engineer_id: undefined,
            project_id: undefined,
        };

        console.log("openDialog data:", dialogConfig.data);

        // Opens a modal dialog containing the given component
        const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(
            data => console.log("Dialog output:", data)
        );
    }

    addTask() {
        console.log("ADDING a task")
        this.openDialog()
        // Button should be Add Task
    }

    editTask(task: string) {
        console.log("EDITING a task")
        this.openDialog();
        console.log("editTask, single task:", task)
        // The edit button should pass down the current information and prepopulate
        // the form with existing data
        // Button should be Update
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
