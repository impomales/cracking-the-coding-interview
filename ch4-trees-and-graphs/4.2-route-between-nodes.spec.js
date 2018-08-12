const { expect } = require('chai');
const routeBetweenNodes = require('./4.2-route-between-nodes');

describe('4.2 routeBetweenNodes function', () => {
  describe('directed graph', () => {
    const graph = {
      a: ['b'],
      b: ['c', 'd'],
      c: [],
      d: []
    };

    it('returns true if there is a path', () => {
      expect(routeBetweenNodes(graph, 'a', 'c')).to.equal(true);
    });

    it('returns false if there is no path', () => {
      expect(routeBetweenNodes(graph, 'd', 'a')).to.equal(false);
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
      expect(routeBetweenNodes(graph, 'a', 'd')).to.equal(true);
    });

    it('returns false if there is no path', () => {
      expect(routeBetweenNodes(graph, 'b', 'a')).to.equal(false);
    });
  });

  describe('disconnected graphs', () => {
    const graph = {
      a: ['b'],
      b: ['c', 'd'],
      c: ['d'],
      d: [],
      f: ['g'],
      g: ['f']
    }

    it('returns true if there is a path', () => {
      expect(routeBetweenNodes(graph, 'f', 'g')).to.equal(true);
    });

    it('returns false if there is no path', () => {
      expect(routeBetweenNodes(graph, 'a', 'f')).to.equal(false);
    });
  });
});
