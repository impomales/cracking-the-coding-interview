/*
  Remove duplicates from linked list.
  Time: O(n)
  Space: O(n)
*/

function removeDuplicates(linkedList) {
  if (!linkedList.head) return;

  let prev = linkedList.head;
  let curr = prev.next;
  const set = new Set();
  set.add(prev.value);

  while (curr) {
    if (set.has(curr.value)) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      set.add(curr.value);
      prev = prev.next;
      curr = curr.next;
    }
  }
}

module.exports = removeDuplicates;
