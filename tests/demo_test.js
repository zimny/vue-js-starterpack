import Vue from 'vue'
import Counter from '../webapp/components/Counter.vue'

describe("MyComponent", () => {
  it('has a created hook', () => {
    expect(typeof Counter.created).toBe('function')
  });
});
