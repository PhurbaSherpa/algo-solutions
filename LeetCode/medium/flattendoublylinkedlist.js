var flatten = function(head) {
  let current = head;
  let nextNode = null;
  if (!head) return null;

  while (current) {
    if (!current.next && nextNode) {
      current.next = nextNode;
      nextNode = null;
    }
    if (current.child) {
      nextNode = current.next;
      current.next = flatten(current.child);
      current.child = null;
    }
    if (current.next && current.next.prev !== current) {
      current.next.prev = current;
    }
    current = current.next;
  }

  return head;
};
