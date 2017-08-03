import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpService } from './../services/emp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  constructor(public empService: EmpService) { }

  ngOnInit() { 
  }

  onEmpSubmit(data): void {
    this.empService.addEmp(data);
    this.form.reset();
  }

}
