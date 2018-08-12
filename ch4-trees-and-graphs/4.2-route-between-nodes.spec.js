const { expect } = require('chai');
const isRoute = require('./4.2-route-between-nodes');

describe('isRoute method', () => {
  describe('directed graph', () => {
    const graph = {
      a: ['b'],
      b: ['c', 'd'],
      c: [],
      d: []
    };

    it('returns true if there is a path', () => {
      expect(isRoute(graph, 'a', 'c')).to.equal(true);
    });

    it('returns false if there is no path', () => {
      expect(isRoute(graph, 'd', 'a')).to.equal(false);
    });
  });

  describe('cyclic graphs', () => {
    const graph = {
      a: ['b'],
      b: ['c'],
      c: ['d'],
      d: ['b']
    };

    it('returns true if there is a path', () => {
      expect(isRoute(graph, 'a', 'd')).to.equal(true);
    });

    it('returns false if there is no path', () => {
      expect(isRoute(graph, 'b', 'a')).to.equal(false);
    });
  });

  describe('disconnected graphs', () => {
    const graph = {
      a: ['b'],
      b: ['c', 'd'],
      c: ['d'],
      f: ['g'],
      g: ['f']
    }

    it('returns true if there is a path', () => {
      expect(isRoute(graph, 'f', 'g')).to.equal(true);
    });

    it('returns false if there is no path', () => {
      expect(isRoute(graph, 'a', 'f')).to.equal(false);
    });
  });
});
