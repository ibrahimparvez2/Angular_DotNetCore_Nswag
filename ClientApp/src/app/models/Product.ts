export class Product {

  Id: number;
  Name: string;
  Description: string;
  Count: number;

  constructor (id: number, name: string, desc: string) {
    this.Id = id;
    this.Name = name;
    this.Description = desc;
  }
}

