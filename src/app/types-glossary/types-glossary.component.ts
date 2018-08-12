import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../../services/database-service';
import { FlowActionType } from '../../models/flow-action-type';

@Component({
  selector: 'app-types-glossary',
  templateUrl: './types-glossary.component.html',
  styleUrls: ['./types-glossary.component.css']
})
export class TypesGlossaryComponent implements OnInit {
  data = Array<FlowActionType>();

  constructor(private db: DataBaseService) {
    db.subscribeTypes(x => {
      this.data.length = 0;
      x.forEach(y => {
        this.data.push(y);
      });
    });
  }

  ngOnInit() {
  }

}
