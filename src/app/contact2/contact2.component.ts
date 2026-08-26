import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.css']
})
export class Contact2Component implements OnInit {

  @ViewChild('form') form!: NgForm;

  constructor() { }

  nameNotAllowed:any[] = ['Anuj', 'Kapil'];

  myReactiveForm!: FormGroup;

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

  get skills(): FormArray<FormControl> {
    return this.myReactiveForm.get('skills') as FormArray<FormControl>;
  }

  ngOnInit(){
    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.NotAllowwed.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.NotAllowEmail),

      }),
      'gender': new FormControl(null),
      'course': new FormControl('Angular'),
      'skills': new FormArray( [
        new FormControl(null, [Validators.required])
      ]
      )
    })

    // this.myReactiveForm.valueChanges.subscribe((value)=> {
    //   console.log(value);
    // })

    // this.myReactiveForm.statusChanges.subscribe((status)=> {
    //   console.log(status);
    // })

    
    
  }

  onSubmit(){
    // console.log(this.myReactiveForm);
    // const control = new FormControl(null, [Validators.required]);
    // (<FormArray>this.myReactiveForm.get('skills')).push(control);

    // this.myReactiveForm.setValue({
    //   'userDetails': {
    //     'username':'AJ',
    //     'email': 'araj@gmail.com'
    //   },
    //   'course':'Angular',
    //   'gender': 'Male',
    //   'skills': [
    //     'photoshop'
    //   ]
    // })

    this.myReactiveForm.patchValue({
      'userDetails': {
        'username':'AJ',
        'email': 'araj@gmail.com'
      },
    })
  }

  reset() {
    this.myReactiveForm.reset();
  }

  NotAllowwed(control:FormControl) {
    if(this.nameNotAllowed.includes(control.value)) {
      return {'notAllowedName': true}
    }
    return null;
  }

  NotAllowEmail(control:AbstractControl): Promise<any> | Observable<any>{
    const myPromsie:any = new Promise<any>((resolve, reject)=> {
      setTimeout(()=> {
        if(control.value === 'anuj.raj@gmail.com'){
          resolve({'notAllowedEmail': true});
        } else {
          resolve(null)
        }
      }, 3000); 
    })
    return myPromsie;
  }


  

 
  


} 

