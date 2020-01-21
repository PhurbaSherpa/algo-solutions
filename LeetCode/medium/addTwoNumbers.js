function addTwoNumbers(l1, l2) {
  let current1 = l1;
  let current2 = l2;
  let carry = 0;
  let head = null;
  let list = null;
  while (current1 || current2) {
    let total = 0;
    if (!current1) {
      total = current2.val + carry;
      current2 = current2.next;
    } else if (!current2) {
      total = current1.val + carry;
      current1 = current1.next;
    } else {
      total = current1.val + current2.val + carry;
      current2 = current2.next;
      current1 = current1.next;
    }
    carry = Math.floor(total / 10);
    let newNode = new ListNode(total % 10);
    if (!head) {
      head = newNode;
      list = head;
    } else {
      list.next = newNode;
      list = list.next;
    }
  }
  if (carry > 0) {
    list.next = new ListNode(carry);
  }
  return head;
}
