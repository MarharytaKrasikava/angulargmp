
import { mockedCourses } from 'src/app/video-courses/courses/mockedCourses';
import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe: OrderByPipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    const pipe: OrderByPipe = new OrderByPipe();
    expect(pipe.transform(mockedCourses)[0].creationDate).toBe(mockedCourses[2].creationDate);
  });
});
