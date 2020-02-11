import { Component, OnInit } from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-fund-withdrawal',
  templateUrl: './fund-withdrawal.component.html',
  styleUrls: ['./fund-withdrawal.component.css']
})


export class FundWithdrawalComponent {

  
  pNames = ['CAD', 'CNH', 'JPY','NGD','SBD','USD'];
  pAmount = ['option1', 'option2', 'option3'];

  displayedColumns = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'CAD', cost: 23.00},
    {item: 'CNH', cost: -131171.04},
    {item: 'JPY', cost: 823860.00},
    {item: 'NGD', cost: 1123.00},
    {item: 'SBD', cost: 60079.19},
    {item: 'USD', cost: 20056.06},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
