# JavaScript Arrays

## 1. Variables vs Arrays

### Variable
- A variable can hold only one value at a time.

```js
const player1 = 45;
const player2 = 10;
const player3 = 49;
```

---

### Array
- An array can hold multiple values in a single variable.

```js
const team = [10, 30, 40, 50, 70];
const playerName = ['rahim', 'karim', 'abir', 'shafin'];
const fruits = ['apple', 'orange', 'grape'];
```

```js
const totalFruits = fruits.length;
```

---

## 2. Accessing Array Elements

```js
const players = ['david', 'john', 'kyle'];

const player1 = players[0];

console.log(player1); // output : david
console.log(players[players.length - 1]); // output : kyle
```

---

## 3. Updating Array Elements

```js
const players = ['david', 'john', 'kyle'];
players[1] = 'alex';

console.log(players);
// Output: ['david', 'alex', 'kyle']
```

---

## 4. Add & Remove Elements

### push() → Add to end  
### pop() → Remove from end  
### shift() → Remove from start  
### unshift() → Add to start  

```js
const friends = ['alex', 'kyle', 'david'];

friends.push('john');
console.log(friends);

// output : [ 'alex', 'kyle', 'david', 'john' ]


friends.pop();
console.log(friends);

// output : [ 'alex', 'kyle', 'david' ]
```

```js
const numbers = [10, 20, 30, 40, 50];

numbers.pop();
numbers.shift();
numbers.unshift(100);

console.log(numbers);

// output : [ 100, 20, 30, 40 ]

```

---

## 5. Important Array Methods

### includes()

```js
const numbers = [10, 5, 6, 9];
const number2 = [1, 2];

const hasItem = numbers.includes(100);
console.log(hasItem); // false
```

```js
const friends = ['alex', 'john'];

if (numbers.includes(55)) {
    console.log('number found');
}

if (friends.includes('alex')) {
    console.log('alex is there'); // alex is there
}
```

```js
const numbers = [10, 5, 6, 9];

numbers.includes(100); // false
numbers.includes(5);   // true
```


---

### concat()

```js
const numbers = [10, 5, 6, 9];
const number2 = [1, 2];

const allNumber = numbers.concat(number2);

console.log(allNumber); // [10, 5, 6, 9, 1, 2]
```

### 📌 Notes
- `concat()` is used to merge two or more arrays.
- It does **not** change the original arrays.
- It returns a **new array** with combined values.

---

### join()

```js
const numbs = [1, 2, 4, 5, 6];

const joined = numbs.join(', ');

console.log(joined); // "1, 2, 4, 5, 6"
```

### 📌 Notes
- `join()` converts an array into a string.
- You can define a separator (e.g., `', '`, `'-'`, `'|'`).
- It does **not** modify the original array.
- Default separator is a comma `,` if not provided.
---



### indexOf()

```js
const numbs = [1, 2, 4, 5, 6];

console.log(numbs.indexOf(5));
console.log(numbs.indexOf(10));
```

---

### Array.isArray()

```js
console.log(Array.isArray(numbs));
```

---

## 6. Array Traversal

### for...of loop

```js
const numbers = [2, 44, 65, 82, 10, 40];

for (const number of numbers) {
    console.log(number);
}
```

---

### while loop

```js
let i = 0;

while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}
```

---

## 7. Reversing an Array

### Using reverse()

```js
const numbers = [1, 2, 4, 5, 8];

const reversed = numbers.reverse();

console.log(reversed);
```

---

### Manual Reverse (Method 1)

```js
const friends = ['alex', 'john', 'doe'];

const afterReverse = [];

for (const friend of friends) {
    afterReverse.unshift(friend);
}

console.log(afterReverse);
```

---

### Manual Reverse (Method 2)

```js
const numbers2 = [1, 2, 4, 5, 8];

const reversedNumber = [];

for (let i = numbers2.length - 1; i >= 0; i--) {
    reversedNumber.push(numbers2[i]);
}

console.log(reversedNumber);
```

---

## 8. slice() vs splice()

### slice()

```js
const numbers = [10, 30, 40, 25, 49, 40, 50];

const slice = numbers.slice(2, 6);

console.log(slice);
```

---

### splice()

```js
const numbers = [10, 30, 40, 25, 49, 40, 50];

const parts = numbers.splice(2, 2);

console.log(parts);
console.log(numbers);
```

```js
numbers.splice(2, 2, 88);
```

---

## 9. Sorting Arrays

```js
const numbers = [10, 30, 40, 25, 49, 20];

numbers.sort();

console.log(numbers);
```

```js
const fruits = ['mango', 'jackfruit', 'banana', 'guava'];

fruits.sort();

console.log(fruits);
```

---

## Important Note About sort()

```js
[10, 2, 30].sort();
```

```js
numbers.sort((a, b) => a - b);
```

---

## Summary

- Arrays store multiple values
- Use length to get size
- Use index to access elements
- Use push, pop, shift, unshift to modify
- Use loops to traverse
- slice does not modify original array
- splice modifies original array
- sort needs compare function for numbers