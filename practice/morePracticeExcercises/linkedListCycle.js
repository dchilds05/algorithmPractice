/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// BRUTE FORCE METHOD
function hasCycle(head) {
    let nodesStack = [];
    while (head != null) {
        if (nodesStack.includes(head)) {
            return true;
        } else {
            nodesStack.push(head);
        }
        head = head.next;
    }
    return false;
}

// BRUTE FORCE METHOD (RECURSIVE)
function hasCycle(head) {
    if(!head) return false;
    let stack = [];
    if(stack.includes(head)) return true;
    stack.push(head);
    if(head.next) hasCycle(head.next);
    return false;
}


// TWO POINTER METHOD
function hasCycle(head) {
    if (head == null) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}

let myMap = new Map();
myMap.set(3,2);
myMap.set(2,0);
myMap.set(0,-4);
myMap.set(-4,1);
myMap.set(-4,2);

let head = 3;

console.log(myMap);
console.log("is there a value at 2?", myMap.has(2));
console.log("size", myMap.size);
console.log("next from 3", myMap.get(3));

function isCycle(head) {
    let stack = [];
    while (head != null) {
        if (stack.includes(head)) {
            return true;
        } else {
            stack.push(head);
        }
        head = myMap.get(head);
    }
    return false;
}


console.log("isCycle: ",isCycle(3));