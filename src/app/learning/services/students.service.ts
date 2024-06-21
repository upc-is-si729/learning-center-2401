import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Student } from "../model/student.entity";

@Injectable({
  providedIn: 'root'
})
export class StudentsService extends BaseService<Student> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/students';
  }
}
