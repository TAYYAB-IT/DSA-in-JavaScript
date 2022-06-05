export const Nodes = {
    value:null,
    next: null
};
//Queue
export var head = null;
export var tail = null;

export const Enqueue = (value) => {
    var node = Object.create(Nodes);
    node.value = value;
    if(head==null){head=tail=node}
    else{
        tail.next=node
        tail=node
    }
};
export const Dequeue = () => {
    
     const value=head
     head=head.next
     return value

};
