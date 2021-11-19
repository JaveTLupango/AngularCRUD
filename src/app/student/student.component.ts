import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student.model';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  studentList : any;
  formData:Student = new Student();
  apiURL:string = 'http://localhost:6792/api/';

  constructor(private httpClient: HttpClient) {
    this.studentList = [];
   }

  ngOnInit(): void {
    this.getStudentList();
  }

  getStudentList()
  {
    debugger;
    this.httpClient.get(this.apiURL+'Students')
                    .subscribe(res =>{
                      this.studentList = res;
                    });
  }

  postStudentValidation(data : NgForm)
  {
    debugger;
    if(this.formData.studentID == 0)
    {
      this.addStudent(data);
    }
    else
    {
      this.updateStudent(data);
    }

  }

  updateStudent(data : NgForm)
  {
    debugger;
      this.httpClient.put(this.apiURL+'Students/'+this.formData.studentID, data)
                      .subscribe(res=>
                        {
                          this.getStudentList();
                          this.formDataReset();
                        })

  }

  addStudent(data : NgForm)
  {
      debugger;
      this.httpClient.post(this.apiURL+'Students', data)
                    .toPromise()
                    .then((res:any)=>
                    {
                      console.log(res);
                      this.getStudentList();
                      this.formDataReset();
                    }
                    );

  }

  formDataReset()
  {
    this.formData.studentID = 0;
    this.formData.s_FirstName = '';
    this.formData.s_LastName = '';
    this.formData.s_MiddleName = '';
    this.formData.studentContacts = '';
    this.formData.studentLevel = 0;
    this.formData.studentEmail = '';
  }

  getStudentInfo(id : number)
  {
    debugger;
    var studentDetails : any;
    this.httpClient.get(this.apiURL+'Students/'+id)
                    .subscribe(res=>
                      {
                        studentDetails = res;
                        this.formData.studentID = studentDetails.studentID;
                        this.formData.s_FirstName = studentDetails.s_FirstName;
                        this.formData.s_LastName = studentDetails.s_LastName;
                        this.formData.s_MiddleName = studentDetails.s_MiddleName;
                        this.formData.studentContacts = studentDetails.studentContacts;
                        this.formData.studentEmail = studentDetails.studentEmail;
                        this.formData.studentLevel = studentDetails.studentLevel;
                      });
  }

  removeStudentInfo(id: number)
  {
    debugger;;
      this.httpClient.delete(this.apiURL+'Students/'+id)
                      .subscribe(()=>
                      {
                        console.log('Deleted');
                        this.getStudentList();
                      });
  }

}
