import { Component } from '@angular/core';
import { AfterViewInit, OnInit, ViewChild} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatIconModule } from "@angular/material/icon";
import { StudentsService } from "../../services/students.service";
import { Student } from "../../model/student.entity";
import { StudentCreateAndEditComponent } from "../../components/student-create-and-edit/student-create-and-edit.component";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-student-management',
  standalone: true,
  imports: [MatPaginator, MatSort, MatIconModule, StudentCreateAndEditComponent, MatTableModule, NgClass],
  templateUrl: './student-management.component.html',
  styleUrl: './student-management.component.css'
})
export class StudentManagementComponent implements OnInit, AfterViewInit {
  // Attributes
  studentData: Student;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'age', 'address', 'actions'];
  @ViewChild(MatPaginator, { static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort!: MatSort;
  isEditMode: boolean;

  // Constructor
  constructor(private studentService: StudentsService) {
    this.isEditMode = false;
    this.studentData = {} as Student;
    this.dataSource = new MatTableDataSource<any>();
  }

  // Private Methods
  private resetEditState(): void {
    this.isEditMode = false;
    this.studentData = {} as Student;
  }

  // CRUD Actions

  private getAllStudents() {
    this.studentService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  };

  private createStudent() {
    this.studentService.create(this.studentData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((student: Student) => { return student; });
    });
  };

  private updateStudent() {
    let studentToUpdate = this.studentData;
    this.studentService.update(this.studentData.id, studentToUpdate).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((student: Student) => {
        if (student.id === response.id) {
          return response;
        }
        return student;
      });
    });
  };

  private deleteStudent(studentId: number) {
    this.studentService.delete(studentId).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((student: Student) => {
        return student.id !== studentId ? student : false;
      });
    });
  };

  // UI Event Handlers

  onEditItem(element: Student) {
    this.isEditMode = true;
    this.studentData = element;
  }

  onDeleteItem(element: Student) {
    this.deleteStudent(element.id);
  }

  onCancelEdit() {
    this.resetEditState();
    this.getAllStudents();
  }

  onStudentAdded(element: Student) {
    this.studentData = element;
    this.createStudent();
    this.resetEditState();
  }

  onStudentUpdated(element: Student) {
    this.studentData = element;
    this.updateStudent();
    this.resetEditState();
  }

  // Lifecycle Hooks

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllStudents();
  }
}
