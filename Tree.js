import * as Stack from './Stack.js'
import * as Queue from './Queue.js'
const Nodes = {
    value:0,
    left: null,
    right: null,
};

//Insert in Tree (Binary)
const Insert = (value) => {
    var node = Object.create(Nodes);
    node.value = value;
    node.left = null;
    node.right = null;
    //Head is Null
    if (head == null) {
        head = node;
    }
    //Some Data already in Tree Exist
    else {
        var n = Object.create(Nodes);
        var pre=Object.create(Nodes)
        n=pre=head;
        while (n != null) {
            pre=n
            n = (value < n.value) ? n.left : n.right;
        }
        if(value<pre.value){pre.left=node}else{pre.right=node}
    }
};

// DFS Traverse A Tree (Pre Order)
const Traverse = (node = head) => {
    if (node != null) {
        console.log(node.value);
        Traverse(node.left);
        Traverse(node.right);
    }
};
/* 
//Search By Traverse DFS (Pre Order)
const Search = (value,node = head) => {
    if (node != null) {
        if(node.value==value){
            console.log("Found")
            return}
        console.log(node.value);
        Search(value,node.left);
        Search(value,node.right);
    }

    
}; */

//Search By Traverse DFS (Pre Order)
const Search_DFS = (value,node = head) => {
    if(head==null){return}
    Stack.Push(node);
   do{
    var v=Stack.Pop()
    console.log(v.value.value)
    if(v.value.value==value){console.log(`Found`) ;break}
    if(v.value.right!=null){Stack.Push(v.value.right)}
    if(v.value.left!=null){Stack.Push(v.value.left)}
  
   // node=Stack.top;
   }
   while (Stack.top!=null);
}

// Searching BFS Traversing

const Search_BFS=(value,node=head)=>{
if(head==null){return}
Queue.Enqueue(node)
do{
    var v=Queue.Dequeue()
    console.log(v.value.value)
    if(v.value.value==value){console.log(`Found`) ;break}
    if(v.value.left!=null){Queue.Enqueue(v.value.left)}
    if(v.value.right!=null){Queue.Enqueue(v.value.right)}
}
while(Queue.head!=null)
}


var head = null;   //Head OF TREE
const values = [13, 4, 12, 14, 10, 5, 1, 8, 2, 7, 9, 11, 6, 18];
values.forEach((v) => Insert(v));
//Search_DFS(14,head); //DFS PreOrder()
Search_BFS(14,head)  //BFS