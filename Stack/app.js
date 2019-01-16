class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.items.length == 0){
            return "Keine Items vorhanden.";
        }

       return this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }
}

let list = new Stack();

list.push(1);
list.push(2);

console.log(list.peek());
console.log(list.pop());
console.log(list.peek());