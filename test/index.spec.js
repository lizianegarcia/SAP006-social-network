// importamos a função que vamos testar
import { myFunction } from '../src/lib/index';

describe('myFunction', () => {
  it('should be a function', () => {
    expect(typeof myFunction).toBe('function');
  });
});
