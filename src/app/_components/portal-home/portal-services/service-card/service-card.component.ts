import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {

  @Input() title : string='';
  @Input() description : string='';
  @Input() url : string='';

  /*ServiceCard: any ={
    "Card-Title": "خدمة إشغال الوظائف بالترقيات",
    "Card-Subtitle": "وصف الخدمة",
    "Card-Text":"خدمة الكترونية تمكن الجهات الحكومية من ترقية موظفيها إما عن طريق الطرح و المفاضلة أو بالترقية الاستثنائية مما يساهم في حوكمة عملية الترقيات بالكامل بجميع أنواعها.​خدمة الكترونية تمكن الجهات الحكومية من ترقية موظفيها إما عن طريق الطرح و المفاضلة أو بالترقية الاستثنائية مما يساهم في حوكمة عملية الترقيات بالكامل بجميع أنواعها.​خدمة الكترونية تمكن الجهات الحكومية من ترقية موظفيها إما عن طريق الطرح و المفاضلة أو بالترقية الاستثنائية مما يساهم في حوكمة عملية الترقيات بالكامل بجميع أنواعها.​خدمة الكترونية تمكن الجهات الحكومية من ترقية موظفيها إما عن طريق الطرح و المفاضلة أو بالترقية الاستثنائية مما يساهم في حوكمة عملية الترقيات بالكامل بجميع أنواعها.​",
    "Card-Button":"بدء الخدمة"
  }*/

  constructor() { }

  ngOnInit() {
  }

}
