export interface CourseInterface {
  id: string;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  topRated: boolean;
}

export class Course implements CourseInterface {
  public id: string;
  public title: string;
  public creationDate: Date;
  public duration: number;
  public description: string;
  public topRated: boolean;

  constructor(id: string, title: string, creationDate: Date, duration: number, description: string, topR: boolean) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
    this.duration = duration;
    this.description = description;
    this.topRated = topR;
  }
}
