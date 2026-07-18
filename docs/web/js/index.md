# coming  soon

<!-- # JavaScript Loop Best Practices

Loops are fundamental to JavaScript, but writing them efficiently and readably is essential for performance and maintainability. Follow these best practices to write production-quality JavaScript.

---

# 1. Choose the Right Loop

Each loop has a specific purpose.

| Loop | Best Use Case |
|-------|---------------|
| `for` | Known number of iterations |
| `while` | Unknown number of iterations |
| `do...while` | Run at least once |
| `for...of` | Iterate over arrays, strings, maps, sets |
| `for...in` | Iterate over object properties |
| `Array.forEach()` | Execute a function for each array item |
| `map()` | Transform arrays |
| `filter()` | Filter arrays |
| `reduce()` | Reduce array to a single value |

---

# 2. Prefer `for...of` for Arrays

✅ Good

```javascript
const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

❌ Avoid

```javascript
for (const index in fruits) {
    console.log(fruits[index]);
}
```

**Why?**

`for...in` iterates over property names, not array values.

---

# 3. Use `for...in` Only for Objects

✅ Good

```javascript
const user = {
    name: "John",
    age: 25
};

for (const key in user) {
    console.log(key, user[key]);
}
```

Avoid using it for arrays.

---

# 4. Prefer Array Methods When Appropriate

Instead of

```javascript
const doubled = [];

for (const number of numbers) {
    doubled.push(number * 2);
}
```

Use

```javascript
const doubled = numbers.map(number => number * 2);
```

It's shorter and easier to read.

---

# 5. Don't Mutate Arrays While Looping

❌ Bad

```javascript
for (let i = 0; i < numbers.length; i++) {
    numbers.splice(i, 1);
}
```

✅ Better

```javascript
const filtered = numbers.filter(number => number > 0);
```

Mutating arrays during iteration often causes skipped elements and bugs.

---

# 6. Cache Length in Traditional `for` Loops

Instead of

```javascript
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}
```

Prefer

```javascript
for (let i = 0, length = items.length; i < length; i++) {
    console.log(items[i]);
}
```

Useful for very large arrays or performance-critical code.

---

# 7. Use `const` Whenever Possible

```javascript
for (const item of items) {
    console.log(item);
}
```

Use `let` only when the variable changes.

---

# 8. Avoid Deeply Nested Loops

❌ Bad

```javascript
for (...) {
    for (...) {
        for (...) {
            // ...
        }
    }
}
```

Instead, split logic into smaller functions.

```javascript
function processItem(item) {
    // ...
}

for (const item of items) {
    processItem(item);
}
```

---

# 9. Use `break` When Finished

```javascript
for (const user of users) {
    if (user.id === targetId) {
        console.log(user);
        break;
    }
}
```

Don't continue looping unnecessarily.

---

# 10. Use `continue` Carefully

```javascript
for (const number of numbers) {
    if (number < 0) {
        continue;
    }

    console.log(number);
}
```

Avoid excessive use because it can reduce readability.

---

# 11. Avoid Infinite Loops

❌ Bad

```javascript
while (true) {
    console.log("Running...");
}
```

Always include an exit condition.

```javascript
while (count < 10) {
    count++;
}
```

---

# 12. Prefer `forEach()` for Simple Side Effects

```javascript
users.forEach(user => {
    console.log(user.name);
});
```

Don't use `forEach()` if you need `break` or `continue`.

---

# 13. Use `map()` for Transformations

❌ Bad

```javascript
const names = [];

for (const user of users) {
    names.push(user.name);
}
```

✅ Better

```javascript
const names = users.map(user => user.name);
```

---

# 14. Use `filter()` for Filtering

Instead of

```javascript
const adults = [];

for (const user of users) {
    if (user.age >= 18) {
        adults.push(user);
    }
}
```

Use

```javascript
const adults = users.filter(user => user.age >= 18);
```

---

# 15. Use `reduce()` for Accumulation

Instead of

```javascript
let total = 0;

for (const price of prices) {
    total += price;
}
```

Use

```javascript
const total = prices.reduce(
    (sum, price) => sum + price,
    0
);
```

---

# 16. Don't Use `map()` for Side Effects

❌ Wrong

```javascript
users.map(user => {
    console.log(user);
});
```

Use

```javascript
users.forEach(user => {
    console.log(user);
});
```

---

# 17. Avoid `await` Inside Loops When Possible

❌ Slow

```javascript
for (const url of urls) {
    await fetch(url);
}
```

Better

```javascript
await Promise.all(
    urls.map(url => fetch(url))
);
```

Runs requests in parallel.

---

# 18. Use `for...of` with Async Iteration

```javascript
for (const file of files) {
    await upload(file);
}
```

Use sequential processing only when order matters.

---

# 19. Don't Modify the Loop Counter

❌ Bad

```javascript
for (let i = 0; i < 10; i++) {
    i += 2;
}
```

It makes loops difficult to understand.

---

# 20. Use Destructuring in Loops

```javascript
const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 }
];

for (const { name, age } of users) {
    console.log(name, age);
}
```

Cleaner and more readable.

---

# 21. Use `entries()` When You Need the Index

```javascript
for (const [index, value] of items.entries()) {
    console.log(index, value);
}
```

Better than manually tracking an index.

---

# 22. Avoid Complex Loop Conditions

❌ Hard to Read

```javascript
for (
    let i = 0;
    i < items.length && isReady && count < max;
    i++
) {
}
```

Instead

```javascript
if (!isReady) return;

for (const item of items) {
    // ...
}
```

---

# 23. Prefer Early Exit

Instead of

```javascript
for (const user of users) {
    if (user.active) {
        // long code
    }
}
```

Use

```javascript
for (const user of users) {
    if (!user.active) {
        continue;
    }

    // long code
}
```

Reduces nesting.

---

# 24. Avoid Side Effects in Loop Conditions

❌ Bad

```javascript
while (items.pop()) {
}
```

Prefer

```javascript
while (items.length > 0) {
    const item = items.pop();
}
```

Much easier to understand.

---

# 25. Production-Ready Example

```javascript
const users = [
    { id: 1, name: "John", active: true },
    { id: 2, name: "Jane", active: false },
    { id: 3, name: "Mike", active: true }
];

const activeUsers = users
    .filter(user => user.active)
    .map(user => ({
        id: user.id,
        name: user.name
    }));

for (const user of activeUsers) {
    console.log(user);
}
```

---

# Quick Checklist

- ✅ Choose the correct loop type.
- ✅ Use `for...of` for arrays.
- ✅ Use `for...in` for objects only.
- ✅ Prefer `map()`, `filter()`, and `reduce()` when appropriate.
- ✅ Use `forEach()` for simple side effects.
- ✅ Don't mutate arrays while iterating.
- ✅ Cache `.length` in performance-critical `for` loops.
- ✅ Use `const` whenever possible.
- ✅ Avoid deeply nested loops.
- ✅ Use `break` when finished.
- ✅ Use `continue` sparingly.
- ✅ Avoid infinite loops.
- ✅ Don't use `map()` for side effects.
- ✅ Avoid `await` inside loops when parallel execution is possible.
- ✅ Use destructuring for cleaner code.
- ✅ Use `entries()` when you need the index.
- ✅ Keep loop conditions simple.
- ✅ Prefer early exits to reduce nesting.
- ✅ Don't modify the loop counter inside the loop.
- ✅ Write loops that are readable before optimizing.

---

# Summary

Following these practices will help you write loops that are:

- **Readable** with clear intent and minimal nesting.
- **Efficient** by avoiding unnecessary work and using the right iteration method.
- **Maintainable** through consistent patterns and modern syntax.
- **Reliable** by preventing common bugs like skipped items, infinite loops, and unintended mutations.
- **Modern** by leveraging ES6+ features such as `for...of`, destructuring, and array methods. -->