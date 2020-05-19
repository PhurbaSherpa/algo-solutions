var oddEvenList = function (head) {
  if (!head) return null;

  let flag = true;
  let odd = null;
  let even = null;
  let oddhead = null;
  let evenhead = null;

  let current = head;

  while (current) {
    let newNode = new ListNode(current.val);
    if (flag) {
      if (odd) {
        odd.next = newNode;
        odd = odd.next;
      } else {
        odd = newNode;
        oddhead = odd;
      }
    } else {
      if (even) {
        even.next = newNode;
        even = even.next;
      } else {
        even = newNode;
        evenhead = even;
      }
    }
    flag = !flag;
    current = current.next;
  }

  odd.next = evenhead;
  return oddhead;
};
