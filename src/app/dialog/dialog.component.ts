import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
    form!: FormGroup; // added '!' workaround b/c kept getting error requiring me to initialize it in the constructor
    description: string;
    deadline: Date;
    priority: string;
    progress: number;
    engineer_id: number;
    project_id: number;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: any) { // may need to change data type
            this.description = data.description;
            this.deadline = data.deadline;
            this.priority = data.priority;
            this.progress = data.progress;
            this.engineer_id = data.engineer_id;
            this.project_id = data.project_id;
        }

    ngOnInit() {
        this.form = this.fb.group({
            description: '',
            deadline: '',
            priority: '',
            progress: '',
            engineer_id: ''
        });
    }

    save() {
        this.dialogRef.close(this.form.value);
        console.log("formValue:", this.form.value)
    }

    close() {
        this.dialogRef.close();
    }
}
