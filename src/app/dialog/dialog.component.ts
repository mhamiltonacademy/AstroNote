import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
    form!: FormGroup; // added '!' workaround b/c kept getting error requiring me to initialize it in the constructor
    description:string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: any) { // may need to change data type
            this.description = data.description;
        }

    ngOnInit() {
        this.form = this.fb.group({
            description: [this.description, []],
        });
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }
}
