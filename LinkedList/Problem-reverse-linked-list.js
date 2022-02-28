
function reverse(linkedList) {
    // check if there is only one node
    if (!linkedList.head.next) {
        return linkedList.head;
    }

    let first = linkedList.head;
    linkedList.tail = linkedList.head;
    let second = first.next;
    while(second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }
    linkedList.head.next = null;
    linkedList.head = first;
}