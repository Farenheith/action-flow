import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataBaseService } from '../../services/database-service';
import { FlowAction } from '../../models/flow-action';
import { MainAction } from '../../models/main-action';

@Component({
  selector: 'app-action-navigation',
  templateUrl: './action-navigation.component.html',
  styleUrls: ['./action-navigation.component.css']
})
export class ActionNavigationComponent implements OnInit {

  description: string;
  next: Array<{label: string, description: string, value: string}> = [];
  history: Array<{ value: string }> = [];
  selectedAction: string;
  mainAction: MainAction;

  constructor(private router: Router, private db: DataBaseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      while (this.history.length > 0) {
        this.history.pop();
      }
      this.selectedAction = null;
      const doc = this.db.getAction(queryParams.id, x => {
        this.mainAction = x;
        this.history.push({
          value: this.getName(x)
        });
        this.description = x.description;
        this.fillNextActions(x);
      });
    }
    );
  }

  private fillNextActions(x: FlowAction) {
    const _this = this;
    this.selectedAction = null;
    while (this.next.length > 0) {
      this.next.pop();
    }
    x.next.forEach(y => {
      _this.mainAction.getSubAction(y, data => {
        const title = _this.getTitle(data);
        _this.next.push({
          label: title,
          value: y,
          description: data.description
        });
      });
    });
  }

  private getTitle(data: FlowAction) {
    return '[' + data.type + '] ' + data.title;
  }

  private getName(data: FlowAction) {
    return '[' + data.type + '] ' + data.name;
  }

  onSelectAction() {
    if (!this.selectedAction) {
      alert('Nenhuma ação selecionada!');
    } else {
      this.next.forEach(x => {
        if (x.value === this.selectedAction) {
          this.description = x.description;
        }
      });
      const _me = this;
      this.mainAction.getSubAction(this.selectedAction, data => {
        _me.history.push({
          value: _me.getName(data)
        });
        _me.fillNextActions(data);
      });
    }
  }

  onChangeAction(newValue: string) {
    if (!newValue) {
      this.description = null;
    } else {
      this.next.forEach(x => {
        if (x.value === newValue) {
          this.description = x.description;
        }
      });
    }
  }
}
