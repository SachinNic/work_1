import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cda-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

    public bio =true;
    public skill;
    public proj;
    constructor() { }

    ngOnInit() {
    }

}
