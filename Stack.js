export const Nodes = {
    value:null,
    next: null
};
export var top = null;
//Stack Push
export const Push = (value) => {
    var node = Object.create(Nodes);
    node.value = value;
    node.next = top;
    top=node
};
export const Pop = () => {
    
     const value=top
     top=top.next
     return value

};
