import { mockedCourses } from '../../../video-courses/video-courses-service/mockedCourses';
import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe: OrderByPipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    const pipe: OrderByPipe = new OrderByPipe();
    expect(pipe.transform(mockedCourses)[0].date).toBe(mockedCourses[2].date);
  });
});
