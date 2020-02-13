import { Component, OnInit } from '@angular/core';
import { PersonalInformationModel } from '../models/personalinformation.model';
import { ContactDetailsModel } from '../models/contactdetails.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateparticulars',
  templateUrl: './updateparticulars.component.html',
  styleUrls: ['./updateparticulars.component.css']
})
export class NewUpdateParticularsComponent implements OnInit {

  personalinformation: PersonalInformationModel = new PersonalInformationModel();
  contactdetails: ContactDetailsModel = new ContactDetailsModel();
  updatePersonalInformation: FormGroup;
  updateContactDetails: FormGroup;
  isShowPI = false;
  isShowCD = false;

  toggleDisplayPersonalInformation() {
    this.isShowPI = true;
    this.isShowCD = false;
  }

  toggleDisplayContactDetails() {
    this.isShowPI = false;
    this.isShowCD = true;
  }

  idtypes = [
    {id:0, name: "-- Please select an ID Type --"},
    {id:1, name: "NRIC"},
    {id:2, name: "Passport"},
  ];

  nationalities = [
    {id:0, name: "-- Please select your Nationality --"},
    {id:1, name: "Singapore"},
    {id:2, name: "Malaysia"},
    {id:3, name: "Indonesia"},
    {id:4, name: "Thailand"},
  ];

  countriescodes = [
    {id:65, name: "+65"},
    {id:60, name: "+60"},
    {id:62, name: "+62"},
    {id:66, name: "+66"},
  ];

  contacttypes = [
    {id:0, name: "Call"},
    {id:1, name: "SMS"},
    {id:2, name: "Call and SMS"},
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.updatePersonalInformation = this.formBuilder.group({
      'name': ['', [
        Validators.required
      ]],
      'IDnumber': ['', [
        Validators.required
      ]]
    });

    this.updateContactDetails = this.formBuilder.group({

    });
  }

  onUpdatePISubmit() {
    alert(this.personalinformation.name);   
  }

  onUpdateCDSubmit() {
    alert(this.contactdetails.homeNumber); 
  }
}
