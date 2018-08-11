import { Component, OnInit } from '@angular/core';
import { ListOption } from '../../models/list-option';
import { DataBaseService } from '../../services/database-service';
import { AuthGuard } from '../authentication/auth-guard';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent implements OnInit {
  cenarios = new Array<ListOption>();
  description: string;
  selected: string;

  constructor(private db: DataBaseService) {
    db.subscribeCenario(x => {
      this.description = x.description + '. Cheque o menu lateral para simular as ações disponíveis!';
      this.selected = AuthGuard.getCenarioId();
    });
  }

  ngOnInit() {
    this.db.subscribeCenarios(x => {
      this.cenarios.length = 0;
      x.forEach(i => {
        this.cenarios.push({
          label: i.title,
          value: i.id
        });
      });
    });
  }

  onChange(value: string) {
    if (!value) {
      this.description = this.description;
    } else {
      AuthGuard.setCenarioId(value);
    }
  }
}
