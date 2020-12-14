// @flow

interface Base {
  _id: string;
  _name: string;
  _self: string;
}

export interface Product extends Base {
  productgroep: string;
}

export interface Component extends Base {
  component: string;
  productgroep: {
    _self: string,
    _id: string,
    _name: string
  };
}

export interface Contact extends Base {
  email: string;
  voornaam: string;
  mobiel: string;
  achternaam: string;
}

export interface Ticket extends Base {
  codename: string;
  number: string;
  description: string;
  date: Date;
  client: {
    _self: string,
    _id: number,
    _name: string
  };
  contact_person: Contact;
  e_mail: string;
  ticket_description: string;
  product: Product;
  component: Component;
  handler: Object;
}
