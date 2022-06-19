export class Bank {

  id: number;
  entry: string | null;
  type: string | null;
  note: string | null;
  createdDate: string | null;

  constructor(
    id: number = 0,
    entry: string | null = '',
    type: string | null = '',
    note: string | null = '',
    createdDate: string | null = ''
    )

  {
    this.id = id;
    this.entry = entry;
    this.type = type;
    this.note = note;
    this.createdDate = createdDate;
   }

}
