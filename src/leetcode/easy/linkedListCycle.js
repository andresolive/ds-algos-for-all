// https://leetcode.com/problems/linked-list-cycle/

// creating a new property
var hasCycle1 = function (head) {
    if (!head) return false;

    let node = head;
    while (node) {
        if (node.next === null) return false;
        if (node.visited) return true;

        node.visited = true;
        node = node.next;
    }
};

// using the 2 runners
var hasCycle2 = function (head) {
    if (!head) return false;

    let runner1 = head;
    let runner2 = head.next;

    while (runner1 && runner2) {
        if (runner1 === runner2) return true;

        if (runner1.next && runner2.next && runner2.next.next) {
            runner1 = runner1.next;
            runner2 = runner2.next.next;
        } else return false;
    }

    return false;
};
