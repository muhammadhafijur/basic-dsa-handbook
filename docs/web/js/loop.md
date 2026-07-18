# JavaScript Loops

## What is a Loop?

A **loop** is used when you want to repeat a task multiple times instead of writing the same code again and again.



## `for` Loop

### Syntax
```js
for (initialization; condition; modification) {
    // repetitive task
}
```

### Breakdown
- **Initialization** → start value
- **Condition** → how long the loop runs
- **Modification** → update each step

---

### Example: Print 0 to 9
```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

### How it works:
- Start at `i = 0`
- Run until `i < 10`
- Increase `i` by 1 each time

---

## `while` Loop

### Syntax
```js
initialization;

while (condition) {
    // code
    // increment/decrement
}
```

---

### Example: Print 1 to 9
```js
let count = 1;

while (count < 10) {
    console.log(count);
    count++;
}
```

### Key Idea:
- Condition is checked **before** running the loop



## `break` Statement

### What is `break`?
`break` is used to **stop the loop immediately**, even if the condition is still true.

---

### Example:
```js
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
```

### Output:
```
1
2
3
4
```

### Key Idea:
- Loop stops when `i === 5`

---

## `continue` Statement

### What is `continue`?
`continue` is used to **skip the current iteration** and move to the next one.

---

### Example:
```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
```

### Output:
```
1
2
4
5
```

## `do...while` Loop

### Syntax
```js
do {
    // code
} while (condition);
```

---

### Example:
```js
let i = 0;

do {
    console.log('value of i', i);
    i++;
} while (i < 5);
```

### Key Idea:
- Runs **at least once**, even if condition is false



### Print Even Numbers (2 → 10)
```js
for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}
```

### Logic:
- Start at 2
- Increase by 2 → only even numbers

---

## Sum from 1 to 5
```js
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}

console.log(sum);
```

### Step-by-step:
```
sum = 0 + 1 = 1
sum = 1 + 2 = 3
sum = 3 + 3 = 6
sum = 6 + 4 = 10
sum = 10 + 5 = 15
```

Final Output: `15`

---

## Multiplication Table

```js
const number = 3;

for (let i = 1; i <= 10; i++) {
    console.log(number, 'X', i, '=', i * number);
}
```

### Output:
```
3 X 1 = 3
3 X 2 = 6
...
3 X 10 = 30
```

---

### Quick Comparison

| Loop Type   | When to Use |
|------------|------------|
| `for`       | When you know how many times to run |
| `while`     | When condition depends on something dynamic |
| `do...while`| When code must run at least once |

---

## Key Takeaways

- Loops = repeat tasks efficiently
- `for` = most commonly used
- Always update variable → avoid infinite loops
- Think in **start → condition → update**

