import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-items',
  providers: [ItemsService],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items:any;

  constructor(private _itemsService:ItemsService) {
    this._itemsService.getItems('7D4B19AF-ADE8-8542-9CEE-FBD487B74F80').subscribe(items => {
      this.items = items.result;
    });
  }

  ngOnInit() {}

}
