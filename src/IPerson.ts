export enum Gender {
  Male = 0,
  Female = 1,
  Unknown = 2
}

export interface IPerson {
  id: number;
  fullName: string;
  phoneNumber: string;
  age: number;
  gender: Gender;
}
