import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mfee-project-table-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss'
})
export class TableRowComponent {
isHeader: boolean = false;
content: string = "--";
scope: "row" | "col" = "col";
}

type TRow = {
  headers?: [];
  data?: [];
};
