import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  constructor() { }

  selectedCourse:string = "Angular";
  genders:any[] = [
    {
      id:'1',
      value: 'Male'
    },
    {
      id:'2',
      value: 'Female'
    }
  ]

  defaultGender:string = 'Male';
  submitedForm:boolean = false;
  formData:any = {
    username: '',
    email: '',
    gender: '',
    course: ''
  }

  ngOnInit(){
    
  }
  msgAlert() {
    alert('Hurray');
  }

  onSubmit(form: NgForm) {
    // console.log(form)
    console.log(this.form)
    this.submitedForm = true;
    this.formData.username = this.form.value.userDetails.username;
    this.formData.email = this.form.value.userDetails.email;
    this.formData.gender = this.form.value.gender;
    this.formData.course = this.form.value.course;
  }

  addUsername() {
    // this.form.setValue({
    //   userDetails: {
    //     username: 'Anuj Raj',
    //     email: ''
    //   },
    //   gender: '',
    //   course: 'Angular'
    // })

    this.form.form.patchValue({
      userDetails: {
        username: 'Rahul'
      }
    })
  }

  


} 
