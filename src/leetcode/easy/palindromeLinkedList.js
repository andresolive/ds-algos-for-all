// leetcode.com/problems/palindrome-linked-list/

https: var isPalindrome = function (head) {
    const arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    let pointerA = 0;
    let pointerB = arr.length - 1;

    while (pointerA <= pointerB) {
        if (arr[pointerA] !== arr[pointerB]) {
            return false;
        }
        pointerA++;
        pointerB--;
    }

    return true;
};

// try the recursive apporach and the in-place reversing approach
