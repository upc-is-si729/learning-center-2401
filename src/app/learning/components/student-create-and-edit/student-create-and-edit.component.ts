import { Component } from '@angular/core';
import {EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Student} from "../../model/student.entity";
import {FormsModule, NgForm} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatFormFieldControl} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-student-create-and-edit',
  standalone: true,
  imports: [MatFormField, MatInputModule, MatButtonModule, FormsModule, NgIf],
  templateUrl: './student-create-and-edit.component.html',
  styleUrl: './student-create-and-edit.component.css'
})
export class StudentCreateAndEditComponent {

  // Attributes
  @Input() student: Student;
  @Input() editMode = false;
  @Output() studentAdded = new EventEmitter<Student>();
  @Output() studentUpdated = new EventEmitter<Student>();
  @Output() editCanceled = new EventEmitter();
  @ViewChild('studentForm', {static: false}) studentForm!: NgForm;

  // Methods
  constructor() {
    this.student = {} as Student;
  }

  // Private methods
  private resetEditState() {
    this.student = {} as Student;
    this.editMode = false;
    this.studentForm.resetForm();
  }

  // Event Handlers

  onSubmit() {
    if (this.studentForm.form.valid) {
      let emitter = this.editMode ? this.studentUpdated : this.studentAdded;
      emitter.emit(this.student);
      this.resetEditState();
    } else {
      console.error('Invalid data in form');
    }
  }

  onCancel() {
    this.editCanceled.emit();
    this.resetEditState();
  }
}
