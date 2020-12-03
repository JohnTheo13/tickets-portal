// @flow

export interface Ticket {
  _id: number;
  _name: string;
  _self: string;
  codename: string;
  number: string;
  description: string;
  date: Date;
  client: {
    _self: string;
    _id: number;
    _name: string;
  };
  contact_person: {
    _self: string;
    _id: number;
    _name: string;
  };
  e_mail: string;
  ticket_description: string;
  product: {
    _self: string;
    _id: number;
    _name: string;
  };
  component: {
    _self: string;
    _id: string;
    _name: string;
  };
  handler: Object;
}
