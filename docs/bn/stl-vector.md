# STL Vector

## ১. Vector কী?

- **Vector** হলো C++ এর STL (Standard Template Library) এর একটি sequence container।
- এটি dynamic array এর মতো কাজ করে — মানে, size রানটাইমে বাড়ানো বা কমানো যায়।

## ২. Vector এর মৌলিক বৈশিষ্ট্য

- Dynamic size (স্বয়ংক্রিয়ভাবে বড় হতে পারে)
- Random access (তথ্যগুলি যেকোনো index থেকে দ্রুত পাওয়া যায়)
- Efficient insertion/deletion শেষের দিকে (push_back(), pop_back())
- সাধারণ array এর মতো contiguous memory allocation

## ৩. STL Vector Built-in Functions

**Vector** এর উপর বিভিন্ন ধরণের অপারেশন করার জন্য STL-এ কিছু গুরুত্বপূর্ণ বিল্ট-ইন ফাংশন রয়েছে। নিচে সাধারণভাবে যেগুলো সবচেয়ে বেশি ব্যবহৃত হয়, সেগুলোর একটি লিস্ট দেওয়া হলো।

## Initialization

| Name                      | Details                                                                 | Time Complexity |
| ------------------------- | ----------------------------------------------------------------------- | --------------- |
| `vector<type> v;`         | Constructs a vector with 0 elements.                                    | O(1)            |
| `vector<type> v(N);`      | Constructs a vector with N elements.                                    | O(N)            |
| `vector<type> v(N, V);`   | Constructs a vector with N elements, all initialized to V.              | O(N)            |
| `vector<type> v(v2);`     | Constructs a vector by copying another vector `v2`.                     | O(N)            |
| `vector<type> v(A, A+N);` | Constructs a vector by copying all elements from array `A` of size `N`. | O(N)            |

---

## Capacity

| Name                 | Details                                                           | Time Complexity           |
| -------------------- | ----------------------------------------------------------------- | ------------------------- |
| `v.size()`           | Returns the number of elements.                                   | O(1)                      |
| `v.max_size()`       | Returns the maximum possible size the vector can hold.            | O(1)                      |
| `v.capacity()`       | Returns current allocated storage (may be more than `size`).      | O(1)                      |
| `v.clear()`          | Removes all elements. Memory is not released.                     | O(N)                      |
| `v.empty()`          | Returns `true` if the vector is empty, otherwise `false`.         | O(1)                      |
| `v.resize(new_size)` | Changes the size of the vector. Adds default values or truncates. | O(K), K = size difference |

---

## Modifiers

| Name                  | Details                               | Time Complexity                  |
| --------------------- | ------------------------------------- | -------------------------------- |
| `v =` or `v.assign()` | Assigns contents from another vector. | O(N) (or O(1) if sizes are same) |
| `v.push_back(x)`      | Adds element `x` at the end.          | O(1)                             |
| `v.pop_back()`        | Removes the last element.             | O(1)                             |
| `v.insert(pos, val)`  | Inserts value at specified position.  | O(N + K)                         |
| `v.erase(pos)`        | Deletes element(s) from position.     | O(N + K)                         |

---

## Other STL Algorithms (Not vector member functions)

| Name                                    | Details                               | Time Complexity |
| --------------------------------------- | ------------------------------------- | --------------- |
| `replace(v.begin(), v.end(), old, new)` | Replaces all `old` values with `new`. | O(N)            |
| `find(v.begin(), v.end(), val)`         | Searches for `val` in vector.         | O(N)            |

---

## Element Access

| Name        | Details                                     | Time Complexity |
| ----------- | ------------------------------------------- | --------------- |
| `v[i]`      | Accesses the ith element (no bounds check). | O(1)            |
| `v.at(i)`   | Accesses the ith element with bounds check. | O(1)            |
| `v.front()` | Accesses the first element.                 | O(1)            |
| `v.back()`  | Accesses the last element.                  | O(1)            |

---

## Iterators

| Name        | Details                                        | Time Complexity |
| ----------- | ---------------------------------------------- | --------------- |
| `v.begin()` | Returns iterator to the first element.         | O(1)            |
| `v.end()`   | Returns iterator to one past the last element. | O(1)            |

---

## Vector Input

```cpp
#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin >> n;

    // vector<int> v(n); // type 1
    vector<int> v;



    // যদি আগেই vector এর size নির্ধারণ করা হয়, তাহলে নিচের মত করে ইনপুট নেওয়া যায়:

    for(int i = 0; i < n; i++){
        cin >> v[i];
    }


    // কিন্তু যদি vector এর size আগে না দেওয়া হয়, তাহলে নিচের মত করে নিতে হবে:
    for(int i = 0; i < n; i++){
        int x;
        cin >> x;
        v.push_back(x); // push_back দিয়ে শেষে এলিমেন্ট যোগ করছি
    }

    // নোট:
    // যদি vector-এর size আগে থেকে বলা না থাকে, তাহলে অবশ্যই `push_back()` ব্যবহার করতে হবে।
    // আর যদি size আগে থেকেই দেওয়া থাকে, তাহলে ইনডেক্স ব্যবহার করে সরাসরি ইনপুট নেওয়া যায়।

    // এখানে vector এর সব এলিমেন্ট প্রিন্ট করা হচ্ছে:
    for(auto x : v){
        cout << x << " ";
    }

    return 0;
}
```

## আরও পড়ার লিঙ্ক

- [cplusplus.com](https://cplusplus.com/reference/vector/vector/)
- [cppreference](https://en.cppreference.com/w/cpp/container/vector.html)
