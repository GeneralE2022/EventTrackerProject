import { BankService } from './../../services/bank.service';
import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/models/bank';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bankEntries: Bank[] = [];
  newEntry: Bank | null = new Bank();
  selected: Bank | null = null;
  editEntry: Bank | null = null;

  constructor(private bs: BankService) {}

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.bs.index().subscribe({
      next: (data) => {
        this.bankEntries = data;
      },
      error: (fail) => {
        console.error('HomeComponent.reload: error');
        console.error(fail);
      },
    });
  }

  setEditEntry(): void {
    this.editEntry = Object.assign({}, this.selected);
  }

  displayHome(): void {
    this.selected = null;
  }

  displayEntry(entry: Bank): void {
    this.selected = entry;
  }

  deleteEntry(id: number): void {
    this.bs.destroy(id).subscribe({
      next: () => {
        this.reload();
      },
      error: (err) => {
        console.error('Error deleting Todo: ');
        console.error(err);
      },
    });
  }

  addEntry(entry: Bank): void {
    this.bs.create(entry).subscribe({
      next: (data) => {
        this.newEntry = new Bank();
        this.reload();
      },
      error: (err) => {
        console.error('Error creating Entry: ');
        console.error(err);
      },
    });
  }

  updateEntry(entry: Bank, setSelected: boolean = true): void {
    this.bs.update(entry).subscribe({
      next: (updated) => {
        this.reload();
        if (setSelected) {
          this.selected = updated;
        }
        this.editEntry = null;
      },
      error: (err) => {
        console.error('Error updating Todo: ');
        console.error(err);
      },
    });
  }

  calculateBalance() {
    let total = 0;

    this.bankEntries.forEach((entry) => {
      total += Number(entry.entry);
    });
    return total;
  }

  calculateTotalEntries() {
    return this.bankEntries.length;
  }
}
