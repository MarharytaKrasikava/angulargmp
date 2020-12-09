import { strict } from 'assert';

export interface Author {
  id: number;
  name: string;
}
export interface CourseInterface {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  isTopRated: boolean;
  authors: Author;
}

export class Course implements CourseInterface {
  public id: number;
  public name: string;
  public date: string;
  public length: number;
  public description: string;
  public isTopRated: boolean;
  public authors: Author;

  constructor(id: number, name: string, date: string, length: number, description: string, topR: boolean, authors: Author) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.length = length;
    this.description = description;
    this.isTopRated = topR;
    this.authors = authors;
  }
}
