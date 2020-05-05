var reorderList = function (head) {
  let q = [];

  let current = head;

  while (current) {
    q.push(current);
    current = current.next;
  }

  current = head;

  while (current) {
    if (!current.next || !current.next.next) break;
    let next = q.pop();
    let temp = current.next;
    current.next = next;
    next.next = temp;
    q[q.length - 1].next = null;
    current = current.next.next;
  }
};
