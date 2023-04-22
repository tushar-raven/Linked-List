const linkedList = (() => {
  let HEAD = null;

  const append = (value) => {
    const newNode = node(value);

    if (HEAD === null) {
      HEAD = newNode;
    } else {
      let pointer = HEAD;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = newNode;
    }
  };

  const prepend = (value) => {
    const newNode = node(value);
    if (HEAD === null) {
      HEAD = newNode;
    } else {
      newNode.nextNode = HEAD;
      HEAD = newNode;
    }
  };

  const size = () => {
    let size = 0;
    if (HEAD === null) {
      return size;
    } else {
      let pointer = HEAD;
      size += 1;

      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
        size++;
      }

      return size;
    }
  };

  const head = () => {
    return HEAD.value;
  };

  const tail = () => {
    if (HEAD === null) {
      return HEAD.value;
    } else {
      let pointer = HEAD;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      return pointer.value;
    }
  };

  const at = (index) => {
    if (index < 1) {
      return "Index can only be positive";
    }

    if (index === 1) {
      if (HEAD === null) {
        return null;
      } else {
        return HEAD.value;
      }
    } else {
      let pointer = HEAD;
      for (let i = 1; i < index; i++) {
        pointer = pointer.nextNode;
        if (pointer === null) {
          return "Linked list is not that long";
        }
      }

      return pointer.value;
    }
  };

  const pop = () => {
    if (HEAD === null) {
      return;
    } else if (HEAD.nextNode === null) {
      HEAD = null;
    } else {
      let pointer = HEAD;
      const length = size();

      for (let i = 0; i < length - 2; i++) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = null;
    }
  };

  const contains = (value) => {
    if (HEAD === null) {
      return "Value Doesn't Exist";
    } else {
      let pointer = HEAD;
      const length = size();
      for (let i = 0; i < length; i++) {
        if (pointer.value === value) {
          return `Contains ${value}`;
        } else {
          pointer = pointer.nextNode;
        }
      }
    }
    return "Value Doesn't Exist";
  };

  const find = (value) => {
    if (HEAD === null) {
      return "Value Doesn't Exist";
    } else {
      let pointer = HEAD;
      const length = size();
      for (let i = 0; i < length; i++) {
        if (pointer.value === value) {
          return length;
        } else {
          pointer = pointer.nextNode;
        }
      }
    }
    return "Value Doesn't Exist";
  };

  const toString = () => {
    if (HEAD === null) {
      return "null";
    } else {
      let pointer = HEAD;
      const length = size();
      let result = "";
      for (let i = 0; i < length; i++) {
        result = result + `${pointer.value} --> `;
        pointer = pointer.nextNode;
      }
      return `${result}null`;
    }
  };

  const insertAt = (value, index) => {
    if (index < 1) {
      return "Index can only be positive";
    }

    if (index === 1) {
      prepend(value);
    } else {
      const newNode = node(value);

      let pointer = HEAD;
      for (let i = 0; i < index - 2; i++) {
        pointer = pointer.nextNode;
        if (pointer === null) {
          console.log("Linked list is not that long");
          return;
        }
      }
      newNode.nextNode = pointer.nextNode;
      pointer.nextNode = newNode;
    }
  };

  const removeAt = (index) => {
    if (index < 1) {
      return "Index can only be positive";
    }

    if (index === 1) {
      HEAD = HEAD.nextNode;
    } else {
      let pointer = HEAD;
      let previousValue;
      for (let i = 0; i < index - 1; i++) {
        previousValue = pointer;
        pointer = pointer.nextNode;
        if (pointer === null) {
          console.log("Linked list is not that long");
          return;
        }
      }
      previousValue.nextNode = pointer.nextNode;
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,

    get HEAD() {
      return HEAD;
    },
  };
})();

const node = (value) => {
  return { value: value || null, nextNode: null };
};

linkedList.append(20);
console.log(linkedList.toString());
linkedList.append(30);
console.log(linkedList.toString());
linkedList.append(40);
console.log(linkedList.toString());
linkedList.append(50);
console.log(linkedList.toString());
linkedList.prepend(10);
console.log(linkedList.toString());

console.log(linkedList.size());
console.log(linkedList.head());
console.log(linkedList.tail());
console.log(linkedList.at(2));

linkedList.pop();
console.log(linkedList.toString());

console.log(linkedList.contains(20));
console.log(linkedList.contains(22));

console.log(linkedList.find(20));

linkedList.insertAt(50, 2);
console.log(linkedList.toString());

linkedList.removeAt(2);
console.log(linkedList.toString());
