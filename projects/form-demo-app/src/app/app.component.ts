import { Component, ViewChild } from '@angular/core';
import { sampleData } from './app.compnent.spec.data'
import { MainFormComponent } from 'dynamic-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data:any= []
  @ViewChild('formLib') formLib: MainFormComponent | undefined

  constructor(){}

  ngOnInit(){
    this.data = sampleData
  }

  getDynamicFormData(data:any) {
    console.log(data)
  }

  submitData(){
    console.log('Form value: ',this.formLib?.myForm.value)
  }
}
