## Linked List কী?

Linked List হলো একটি লিনিয়ার ডেটা স্ট্রাকচার, যেখানে উপাদানগুলো (nodes) মেমোরিতে ধারাবাহিকভাবে না থেকে ছড়িয়ে-ছিটিয়ে থাকে, কিন্তু প্রত্যেকটি node পরবর্তী node-এর ঠিকানা ধরে রাখে। সহজ ভাষায়, লিঙ্কড লিস্ট হলো এমন একটি ডেটা স্ট্রাকচার যেখানে প্রতিটি এলিমেন্ট (যাকে নোড বলা হয়) একটি ডেটা এবং পরবর্তী নোডের ঠিকানা (পয়েন্টার) রাখে । প্রতিটি node সাধারণত দুইটি অংশ নিয়ে গঠিত:

Linked List এ ডেটা সংরক্ষণের জন্য contiguous memory লাগেনা, তাই এটা অনেক বেশি ফ্লেক্সিবল।

1. **ডেটা (Data):** যে মান সংরক্ষণ করা হয়
2. **পয়েন্টার (Pointer/Next):** পরবর্তী node এর ঠিকানা

## কেন Linked List ব্যবহার করবো?

অ্যারে ব্যবহার করলে ফিক্সড সাইজ রাখতে হয় এবং ইনসার্ট বা ডিলিট অপারেশনে অনেক সময় শিফট করতে হয়। কিন্তু Linked List-এ:

- ডাইনামিক মেমোরি ব্যবহৃত হয় (চাহিদামতো বাড়ানো যায়)
- ইনসার্ট ও ডিলিট অনেক ক্ষেত্রে দ্রুত হয় (বিশেষ করে শুরুতে বা মাঝখানে)

## Linked List দেখতে কেমন?

ধরি আমাদের একটি লিঙ্কড লিস্ট আছে:

```
[10 | *] → [20 | *] → [30 | *] → NULL
```

প্রতিটি node একটি মান (যেমন 10, 20, 30) এবং পরবর্তী node এর ঠিকানা (\* অংশ) ধরে রাখে।

## Linked List এর ধরণ

1. **Singly Linked List:** প্রতিটি node শুধু পরবর্তী node এর ঠিকানা রাখে।
2. **Doubly Linked List:** প্রতিটি node আগে ও পরে — দুই পাশের node এর ঠিকানা রাখে।
3. **Circular Linked List:** শেষ node আবার প্রথম node-কে নির্দেশ করে।

## Node তৈরি করা
Node হলো Linked List এর সবচেয়ে ছোট ইউনিট।
প্রতিটি Node এর মধ্যে দুইটা অংশ থাকে:

- Data (ডেটা)

- Next Pointer (পরবর্তী Node এর ঠিকানা)

```cpp
#include<bits/stdc++.h>   // সব স্ট্যান্ডার্ড লাইব্রেরি একবারে ইনক্লুড করার হেডার
using namespace std;

class Node{
    public:
    int val;       // নোডের মধ্যে রাখা ডেটা ( মান )
    Node* next;    // পরবর্তী নোডের ঠিকানা (পয়েন্টার)
};

int main()
{
    Node a,b,c;    // তিনটি নোড অবজেক্ট তৈরি করলাম
    a.val = 10;    
    b.val = 20;  
    c.val = 30;   

    a.next = &b;   // a নোডের পরবর্তী নোড হলো b এর address
    b.next = &c;   // b নোডের পরবর্তী নোড হলো c এর address
    c.next = NULL; // c নোড লিস্টের শেষ, তাই পরবর্তী নোড নেই, তাই NULL সেট করে দিলাম

    cout << a.val << endl;   
    // cout << (*a.next).val << endl;  // a.next পয়েন্টারকে ডিরেফারেন্স করে মান নিবে (b এর val) => ২০

    // cout << (*(*a.next).next).val << endl; // b.next (c) ডিরেফারেন্স করে তার মান নেবে => ৩০ 
    // উপরের এই লাইনটা আমি শুধু প্রাকটিসের জন্য টেস্ট করে দেখছিলাম । আমরা সাধারণত এইভাবে করবো না ।

    cout << a.next->val << endl;  // এখানে a.next পয়েন্টার দিয়ে b এর মান প্রিন্ট করবে => ২০

    return 0;
}

```

## Constructor সহ Node
আমরা Node তৈরির সময় Data ও Next Pointer একসাথে সেট করার জন্য Constructor ব্যবহার করতে পারি।

```cpp
#include<bits/stdc++.h>
using namespace std;

class Node {
public:
    int val;  
    Node* next;

    // Constructor : নতুন নোড তৈরি হলে এই ফাংশন চালানো হয়
    Node(int val) {
        this->val = val;    // প্যারামিটার হিসেবে পাওয়া val কে এই নোডের val এ সেট করলাম
        this->next = NULL;  // নতুন নোডের পরবর্তী নোড এখনো নাই, তাই NULL দিয়েছি
    }
};

int main()
{
    Node a(10), b(20), c(30);  
    // ৩টি নোড তৈরি হলো, যার মান যথাক্রমে ১০, ২০, ৩০
    // এখানে কনস্ট্রাক্টর ব্যবহার করা হয়েছে, তাই ভ্যালু সরাসরি প্যারামিটার হিসেবে দেয়া হচ্ছে

    a.next = &b;
    b.next = &c;

    cout << a.val << endl;
    cout << a.next->val << endl;

    return 0;
}

```

## Dynamic Node
Node গুলো সাধারণত হিপ মেমোরি থেকে ডাইনামিক্যালি (runtime এ) তৈরি করা হয় new অপারেটর দিয়ে।

```cpp
#include<bits/stdc++.h>
using namespace std;

class Node
{
public:
    int val;
    Node *next;
    Node(int val)
    {
        this->val = val;
        this->next = NULL;
    }
};

int main()
{
    Node* head = new Node(10);
    Node* a = new Node(20);
    Node* b = new Node(30);

    head->next = a;
    a->next = b;

    

    // a.next = &b;
    // আগে a ছিল একটা object কিন্তু এখন head হলো একটা pointer

    cout << head->val << endl;         // head node এর মান প্রিন্ট করবে (10)
    cout << head->next->val << endl;  // head এর পরের node এর মান প্রিন্ট করবে (20)
    return 0;
}

```

**Thanks to Pias Vai for these insights.**

Notes from Pias vai :

- new কীওয়ার্ড একটি পয়েন্টার রিটার্ন করে
- সেই পয়েন্টারটি আমাদের রিসিভ করতে হবে
- আমাদের মেমরিতে দুই ধরনের মেমরি থাকে আমরা জানি
- একটাঃ heap memory, আরেকটাঃ stack memory
- heap memory কে access করতে পারে new কীওয়ার্ড
- head পয়েন্টার তৈরি হয় stack memory তে
- node গুলো থাকে heap memory তে
- এই heap memory তে যে node গুলো আছে, তাদের access করার জন্য পয়েন্টার দরকার
- সেই পয়েন্টার থাকে stack memory তে

## Linked List প্রিন্ট করা
```cpp
#include<bits/stdc++.h>
using namespace std;

class Node
{
public:
    int val;
    Node *next;
    Node(int val)
    {
        this->val = val;
        this->next = NULL;
    }
};

int main()
{
    Node* head = new Node(10);
    Node* a = new Node(20);
    Node* b = new Node(30);
    Node* c = new Node(40);

    head->next = a;
    a->next = b;
    b->next = c;


    Node* tmp = head;

    while(tmp != NULL){
        cout << tmp->val << endl;
        tmp = tmp->next;
    }

    return 0;
}
```
এখানে আমরা tmp নামের একটা পয়েন্টার দিয়ে লিস্টের শুরু থেকে শেষ পর্যন্ত ঘুরে প্রতিটি নোডের ভ্যালু প্রিন্ট করছি। যতক্ষণ tmp NULL না হয় ( মানে লিস্টের শেষ না হওয়া পর্যন্ত ) ততক্ষণ আমরা লুপ চালাচ্ছি।

#### এখন প্রশ্ন হচ্ছে আমরা কেন tmp পয়েন্টার নিলাম ? আমরা কেন head দিয়ে করলাম না?

head হচ্ছে লিঙ্কড লিস্টের শুরু এর পয়েন্টার। যদি সরাসরি head দিয়ে লিস্ট ট্রাভার্স করি, তাহলে head এর মান পরিবর্তন হবে। কিন্তু head আমাদের লিস্টের প্রথম নোডের address, সেটাকে আমরা হারাতে চাই না।
তাই, লিস্ট ঘুরার জন্য একটি নতুন পয়েন্টার tmp নিলাম, যেটা head এর address পাবে।
এখন tmp দিয়ে আমরা লিস্ট ঘুরবো, আর head অপরিবর্তিত থাকবে।


## Reference of a Pointer

### **Pointer** কী?
Pointer হলো এমন একটি ভেরিয়েবল যা অন্য একটি ভেরিয়েবলের **মেমোরি অ্যাড্রেস** (ঠিকানা) সংরক্ষণ করে। সহজ ভাষায় Pointer মূল তথ্য না রেখে, তথ্যটি কোথায় আছে সেটা বলে দেয় ।

```cpp
int a = 10;
int* p = &a; 
```

> এখানে `p` একটি pointer যা `a` এর ঠিকানা (address) ধরে রেখেছে।


### **Reference** কী?
Reference হলো একটি ভেরিয়েবলের **আরেকটি নাম** বা **উপনাম**। এটি নতুন ভেরিয়েবল নয়, বরং আগের ভেরিয়েবলের উপরেই কাজ করে।

```cpp
int a = 10;
int& ref = a;  // ref হলো a এর উপনাম
```

> এখন `ref` দিয়ে `a` এর মান পরিবর্তন করা সম্ভব।

আরেকটু ভিতরে ঢুকা যাক,
এইখানে `&` না ব্যাবহার করলে কি হবে?

এখানে ```int& ref = a;``` মানে ref হচ্ছে a এর reference, অর্থাৎ ref আরেকটা নাম a এর জন্য।

যদি আমি লিখি
```cpp
int a = 10;
int ref = a;  // এখানে & নেই
```

তাহলে এর মানে হবে:

- ref হচ্ছে নতুন একটি int ভেরিয়েবল,

- যেটার মান হবে a এর মানের copy — অর্থাৎ ১০,

- ref আর a একে অপরের থেকে আলাদা আলাদা ভেরিয়েবল,

- ref এর মান পরিবর্তন করলে a এর মান পরিবর্তন হবে না।

নিচে একটা এক্সামপল দেওয়া হলো :
```cpp
int a = 10;
int &ref = a;  // ref হলো a এর reference (alias)

ref = 20;
cout << a << endl;  // 20 (কারণ ref এবং a একই জিনিস)

int b = 10;
int refNotRef = b;  // refNotRef হলো b এর কপি

refNotRef = 20;
cout << b << endl;  // 10 (কারণ refNotRef আলাদা ভেরিয়েবল)

```

---
এখন নিচের কোডটি রান করি ।

```cpp
#include<bits/stdc++.h>
using namespace std;

void fun(int* p){
    cout << "Inside fun: " <<  *p << endl;
}

int main()
{
    int x = 2;
    int *p = &x;
    fun(p);
    cout << "Inside main: " <<  *p << endl;
    return 0;
}
```

```
Output:  
Inside fun: 2  
Inside main: 2
```

---

এবার fun function-এ pointer টিকে dereference করে এর মান 2 থেকে 10 করে দিলাম।

```cpp
#include<bits/stdc++.h>
using namespace std;

void fun(int* p){
    *p = 10;
}

int main()
{
    int x = 2;
    int *p = &x;
    fun(p);
    cout << x << endl;
    return 0;
}
```
```
Output:  
10
```

এখানে দেখুন `x` এর মান 2 না হয়ে 10 হয়েছে। মানে হচ্ছে function এর ভিতরেও যদি pointer কে dereference করে মান পরিবর্তন করি তাহলে সেটা ঠিকভাবে কাজ করে।

তাহলে সমস্যা কোথায়?

সমস্যা হচ্ছে আমরা যদি pointer-কে dereference না করে বরং pointer টিকেই পরিবর্তন করে ফেলি। বর্তমানে pointer `x` কে point করছে। কিন্তু আমরা function এর ভিতরে pointer কে অন্য কাউকে point করতে বলি।

```cpp
#include<bits/stdc++.h>
using namespace std;

void fun(int* p){
    int y = 20;
    p = &y;
}

int main()
{
    int x = 2;
    int *p = &x;
    fun(p);
    cout << *p << endl;
    return 0;
}
```

এখানে আপনি যদি কোডটি রান করেন তাহলে দেখবেন Output আসবে 2। 

অর্থাৎ,

**function এর মধ্যে যদি pointer কে change করে দেই সেই পরিবর্তনটা main function থেকে আর পাওয়া যায় না।**

change মানে হচ্ছে pointer টা যেই value কে point করছিলো, আমরা সেটা change করে অন্য একটি value কে point করছি ।

এখানে Main function এর `p` এবং function এর `p` এক না।  

তাহলে এর প্রমাণ কী?

আমরা যদি `fun` এর ভিতরে `p` এর address এবং main এর ভিতরে `p` এর address প্রিন্ট করি তাহলে দেখব তারা আলাদা।

```cpp
#include<bits/stdc++.h>
using namespace std;

void fun(int* p){
    int y = 20;
    p = &y;
    cout << "Inside fun: " <<  &p << endl;
}

int main()
{
    int x = 2;
    int *p = &x;
    fun(p);
    cout << "Inside main: " <<  &p << endl;
    return 0;
}
```

```
Output:  
Inside fun: 0x61fef0  
Inside main: 0x61ff08
```

  
> **Pointer কে dereference করলে, pointer-এর মধ্যে যেই address টা আছে, সে ঐ address এ গিয়ে যেই value টা পায় সেটাই প্রিন্ট করে দেয় ।**



এখন আমরা যদি চাই যে function এর ভিতরে pointer টাকে change করলে সেই change টা main function এও reflect করুক — তাহলে আমাদের pointer-কে reference আকারে পাঠাতে হবে।

এর জন্য pointer পাঠানোর আগে `&` (ampersand) চিহ্ন দিয়ে দিতে হবে:

```cpp
#include<bits/stdc++.h>
using namespace std;

void fun(int* &p){
    int y = 20;
    p = &y;
    cout << "Inside fun: " <<  *p << endl;
}

int main()
{
    int x = 2;
    int *p = &x;
    fun(p);
    cout << "Inside main: " <<  *p << endl;
    return 0;
}
```
```
Output:  
Inside fun: 20  
Inside main: 20
```

---

এবার যদি আমরা নিচের কোডটি চালাই, তাহলে দেখব যে, function ও main— উভয় ক্ষেত্রেই pointer এর address একই।

```cpp
#include<bits/stdc++.h>
using namespace std;

void fun(int* p){
    int y = 20;
    p = &y;
    cout << "Inside fun: " <<  &p << endl;
}

int main()
{
    int x = 2;
    int *p = &x;
    fun(p);
    cout << "Inside main: " <<  &p << endl;
    return 0;
}
```



---

📌 Note:  
Function এর ভিতরে যদি আমরা pointer টাকে change করি, এবং সেই change টা main function এও চাই — তাহলে pointer এর আগেই reference দিয়ে দিতে হবে।  

এই concept টি সামনে আমাদের **linked list** এ কাজে লাগবে।


##  Insert at Head - Singly Linked List Operation
আমরা একটি Singly Linked List তৈরি করবো এবং শিখবো কীভাবে লিস্টের হেডে (সামনে) নতুন নোড যুক্ত করা যায়।

আপাতত ম্যানুয়ালি নোড তৈরি করছি, পরে আমরা শিখবো কীভাবে লিঙ্কড লিস্টে ইউজার ইনপুট থেকে নোড নেয়া যায়।

- এখন লিঙ্কড লিস্টের হেডে একটি নতুন নোড ইনসার্ট করবো।

- এই কাজটি আমরা একটি ফাংশনের মাধ্যমে করবো। এতে কোডটি organized থাকবে এবং বুঝতেও সহজ হবে। আবার একই কাজ বারবার করতে চাইলে শুধুমাত্র ফাংশনটি কল করলেই চলবে।

- এখন থেকে আমরা এই ধরনের অপারেশনগুলো ফাংশনের মাধ্যমে করার চেষ্টা করবো।

```cpp
#include<bits/stdc++.h>
using namespace std;

class Node
{
public:
    int val;
    Node *next;
    Node(int val)
    {
        this->val = val;
        this->next = NULL;
    }
};

void insert_at_head(Node* &head, int val){
    Node* newNode = new Node(val);
    newNode->next = head;
    head = newNode;
}

void print_linked_list(Node* head){
    Node* tmp = head;
    while(tmp != NULL){
        cout << tmp->val << endl;
        tmp = tmp->next;
    }
}

int main()
{
    // ম্যানুয়ালি কিছু নোড তৈরি করছি
    Node* head = new Node(10);
    Node* a = new Node(20);
    Node* b = new Node(30);

    head->next = a;
    a->next = b;

    insert_at_head(head, 100);
    insert_at_head(head, 200);

    print_linked_list(head);
    
    return 0;
}

```



- লক্ষ্য করি, প্রিন্ট করার ফাংশনে আমরা হেড পরিবর্তন করিনি, শুধু ভ্যালুগুলো
      দেখিয়েছি ।

- যখন আমরা ইউজার ইনপুট নিবো, তখন আমরা শেষ নোডটি আগে থেকেই জানবো না ।

## Insert at Tail - Singly Linked List Operation
লিঙ্কড লিস্টের একদম **শেষে (tail এ)** নতুন একটি নোড যুক্ত করতে চাইলে আমাদের প্রথমে শেষ নোডটি খুঁজে বের করতে হবে, তারপর তার `next` পয়েন্টারটি নতুন নোডের দিকে পয়েন্ট করতে হবে।

```cpp
#include<bits/stdc++.h>
using namespace std;

class Node{
public:
    int val;
    Node* next;
    Node(int val){
        this->val = val;
        this->next = NULL;
    }
};


void insert_at_tail(Node* &head, int val){
    Node* newNode = new Node(val);

    // এইখানে আমরা চেক করছি যদি লিস্ট খালি থাকে তাহলে নতুন নোডটাই হেড
    if(head == NULL){
        head = newNode;
        return;
    }


    Node* tmp = head;
    while(tmp->next != NULL){
        tmp = tmp->next;
    }
    // now tmp in last node
    tmp->next = newNode;
}

void print_linked_list(Node* head){
    Node* tmp = head;
    while(tmp != NULL){
        cout << tmp->val << endl;
        tmp = tmp->next;
    }
}

int main(){

    Node* head = new Node(10);
    Node* a = new Node(20);
    Node* b = new Node(30);

    head->next = a;
    a->next = b;

    insert_at_tail(head, 40);

    print_linked_list(head);

    return 0;
}
```

```
Output: 
10
20
30
40
```

Note:
1. **Node ক্লাস** প্রতিটি নোডে থাকবে একটি val এবং একটি পয়েন্টার next যেটা পরবর্তী নোডের দিকে ইঙ্গিত করে।

2. **insert_at_tail() function:**

- প্রথমে একটি নতুন নোড তৈরি করা হয়।

- যদি head == NULL হয়, অর্থাৎ লিস্ট খালি — তাহলে নতুন নোডটাই হেড হয়ে যাবে।

- না হলে, আমরা head থেকে শুরু করে next == NULL পর্যন্ত গিয়েছি (অর্থাৎ লাস্ট নোড পর্যন্ত গিয়েছি)।

- তারপর লাস্ট নোডের next কে নতুন নোডের দিকে পয়েন্ট করেছি।

3. **print_linked_list() function:** প্রতিটি নোড একে একে প্রিন্ট করে।

---

**NOTE :**

আমরা tmp নামের একটি পয়েন্টার ভেরিয়েবল ব্যবহার করেছি কারণ,
- যদি আমরা সরাসরি head দিয়ে লুপ চালাতাম, তাহলে head এর মান পরিবর্তন হয়ে যেত, যা ঠিক না। কারণ head হচ্ছে আমাদের পুরো লিস্টের reference বা starting point।
- তাই আমরা tmp নামে একটি নতুন পয়েন্টার ব্যবহার করি, যেটা head কে কপি করে
```
Node* tmp = head;
```
- এরপর tmp কে দিয়ে লিস্টে ঘুরি, যতক্ষণ না পর্যন্ত আমরা শেষ নোডে পৌঁছাই।

## Insert at any position - Singly Linked List Operation

আমরা আগে লিঙ্কড লিস্টের **Head** এবং **Tail** এ ইনসার্ট করা শিখেছি।  
এখন আমরা শিখবো কীভাবে লিঙ্কড লিস্টের **মাঝখানের যেকোনো নির্দিষ্ট পজিশনে** নতুন একটি নোড insert করা যায় ।

লিঙ্কড লিস্টে আমরা যদি মাঝখানে কোনো একটা পজিশনে নতুন নোড যুক্ত করতে চাই, তাহলে আমাদের কয়েকটি ধাপ অনুসরণ করতে হবে:

Steps:
- নতুন Node তৈরি করা ।
- নতুন নোডের আগে থাকা নোড এর পজিশনে যাওয়া
- নতুন Node-এর next সেট করো।
- আগের নোডটির next পয়েন্টার নতুন Node-কে পয়েন্ট করা

```cpp
#include<bits/stdc++.h>
using namespace std;

class Node
{
public:
    int val;
    Node *next;
    Node(int val)
    {
        this->val = val;
        this->next = NULL;
    }
};


void insert_at_any_pos(Node* head, int idx, int val){
    Node* newNode = new Node(val);
    // যদি idx == 0 হয়, তাহলে নতুন নোড head হবে
    if (idx == 0) {
        newNode->next = head;
        head = newNode;
        return;
    }

    Node* tmp = head;

    for(int i = 1; i < idx; i++){
        tmp = tmp->next;
        if(tmp == NULL) {
            return; // যদি পজিশন ভ্যালিড না হয় তাহলে return করে দিবো ।
        }
    }
    newNode->next = tmp->next;
    tmp->next = newNode;
}


void print_linked_list(Node* head){
    Node* tmp = head;
    while(tmp != NULL){
        cout << tmp->val << endl;
        tmp = tmp->next;
    }
}

int main()
{
    Node* head = new Node(10);
    Node* a = new Node(20);
    Node* b = new Node(30);
    Node* c = new Node(40);

    head->next = a;
    a->next = b;
    b->next = c;

    insert_at_any_pos(head, 2, 50);  


    print_linked_list(head);
    
    return 0;
}
```
--- 
```cpp
insert_at_any_pos(head, 2, 50);
```

এখানে idx = 2 অর্থাৎ আমরা index 2 তে ৫০ ইনসার্ট করতে চাই।
আমরা যদি index 0 থেকে ধরি তাহলে

যদি ইনডেক্সিং 0 থেকে শুরু করি, তাহলে:

```cpp
index:   0     1     2     3
value:  10 -> 20 -> 30 -> 40
                ↑
            এখানে 50 বসবে
```

```cpp
Index:     0            1            2            3

[ 10 | 2A ] -> [ 20 | 3D ] -> [ 30 | 4B ] -> [ 40 | NULL ] -> NULL

```

আরেকটু ভালো মতো ডায়াগ্রাম টা দেখতে গেলে সেইটা হবে অনেকটা এইরকম । আমরা বুঝার জন্য ধরে নিলাম node এর address গুলো এরকম ।

```1A -> 2A -> 3D -> 4B```

```cpp
[ 10 | 2A ] ---> [ 20 | 3D ] ---> [ 30 | 4B ] ---> [ 40 | NULL ] ---> NULL
   1A              2A              3D               4B


```


অপারেশনের পরে লিস্ট হবে:
```cpp
10 -> 20 -> 50 -> 30 -> 40
```




আমরা index 2 এ নতুন নোড (৫০) ইনসার্ট করবো।


- আমরা `new Node(val)` এর মাধ্যমে নতুন একটি নোড তৈরি করি।
- আমরা `for` লুপ ব্যবহার করে `tmp` কে `idx - ১` তম নোড পর্যন্ত নিয়ে যাই। এই নোডটি হবে নতুন নোডের আগে থাকা নোড।
- নতুন নোডের `next` হবে `tmp->next`, এরপর `tmp->next` হবে `newNode`।

এখানে কেন `Node* &head`?

এখানে `&` মানে হচ্ছে reference to a pointer ।

এই পদ্ধতিতে ফাংশনের ভিতরে `head` পরিবর্তন করলে, বাইরের আসল `head` পয়েন্টারও আপডেট হয়।


## Insert at Tail ( Optimized ) — Singly Linked List
আগেরবার নতুন নোড যোগ করার সময় লিস্টের শুরু থেকে শেষ পর্যন্ত গিয়ে tail খুঁজতে হতো, ফলে Time Complexity হয় O(n)।  

**Optimized Approach :**

**tail** নামে একটি পয়েন্টার রেখে দেওয়া হয়, যা সবসময় লিস্টের শেষ নোডের address এ থাকবে। তাই নতুন নোড যোগ করতে সরাসরি tail থেকে কাজ হবে, যার Time Complexity হবে O(1) ।

```cpp
#include<bits/stdc++.h>
using namespace std;

class Node{
    public:
    int val;
    Node* next;
    Node(int val){
        this->val = val;
        this->next = NULL;
    }
};

void insert_at_tail(Node* &head, Node* &tail, int val){
    Node* newNode = new Node(val);
    if(head == NULL){
        head = newNode;
        tail = newNode;
        return;
    }
    
    tail->next = newNode;
    tail = newNode;
}


void print_linked_list(Node* head){
    Node* tmp = head;
    while(tmp != NULL){
        cout << tmp->val << endl;
        tmp = tmp->next;
    }
}


int main(){
    Node* head = new Node(10);
    Node* a = new Node(20);
    Node* tail = new Node(30);

    head->next = a;
    a->next = tail;

    insert_at_tail(head, tail, 50);
    insert_at_tail(head, tail, 40);
    print_linked_list(head);

    return 0;
}

```
এখানে,

- `insert_at_tail` ফাংশনে আমরা head এবং tail দুইটাই রেফারেন্স হিসেবে দিয়েছি।
- নতুন node তৈরি করার পর  tail node এর পরে এটাকে যুক্ত করেছি ।
- এরপর tail pointer টাকে আপডেট করেছি যেন এটা সবসময় লিস্টের শেষ node কে point করে।

NOTE:
- যদি লিস্ট ফাঁকা থাকে (`head == NULL`), তাহলে নতুন node ই হবে head এবং tail — কারণ একটা node ই তখন পুরো লিস্ট।
- এবং এখন প্রতিবার নতুন node যোগ করতে শুধু `tail->next = newNode` এবং `tail = newNode` করলেই শেষ — আর লিস্ট ঘুরে যাওয়া লাগে না। যেহেতু function এ এটি করে রেখেছি তাই বার বার `insert_at_tail` function কল করলেই হবে ।
- আমরা যেহেতু `tail` কে ট্র্যাক করে রেখেচি, তাই নতুন node insert করতে পুরো লিস্ট traverse করার দরকার নেই। ফলে ইনসার্ট করার Time Complexity O(1), যা অনেক efficient।

## Taking input into a linked list
### Note:

- লিংকড লিস্টে সাধারণত **size** বলা থাকে না।
- তাই বেশিরভাগ Problem এ ইনপুটের শেষে `-1` দেয়া থাকে, যার মানে হচ্ছে ইনপুট এখানেই শেষ।
- এই `-1` দেখে আমরা বুঝি, আর ইনপুট নেয়া লাগবে না।
- আমরা ইনপুট নেওয়ার সময় প্রতিটি ভ্যালুকে লিংকড লিস্টের **শেষে (tail)** যোগ করবো ।

### Steps:

1. প্রথমে একটি `Node` ক্লাস তৈরি করব, যেখানে একটি ভ্যালু এবং একটি পরবর্তী `Node` এর জন্য পয়েন্টার থাকবে।
2. এরপর একটি ফাংশন লিখব, যেটি **tail** এ নতুন নোড যোগ করবে। যদি লিংকড লিস্ট ফাঁকা হয়, তাহলে সেটাই হবে `head` ও `tail`।
3. ইউজার যতক্ষণ পর্যন্ত `-1` না দেয়, ততক্ষণ ইনপুট নিয়ে লিস্টে যুক্ত করব।
4. শেষে সম্পূর্ণ লিংকড লিস্টটি প্রিন্ট করে দেখাবো।


```cpp
#include <bits/stdc++.h>
using namespace std;


class Node {
public:
    int val;
    Node* next;

    Node(int val) {
        this->val = val;
        this->next = NULL;
    }
};


void insert_at_tail(Node* &head, Node* &tail, int val) {
    Node* newNode = new Node(val);
    
    if (head == NULL) {
        head = newNode;
        tail = newNode;
        return;
    }

    tail->next = newNode;
    tail = newNode;
}


void print_linked_list(Node* head) {
    Node* tmp = head;
    while (tmp != NULL) {
        cout << tmp->val << endl;
        tmp = tmp->next;
    }
}


int main() {
    Node* head = NULL;
    Node* tail = NULL;

    int val;
    while (true) {
        cin >> val;
        if (val == -1) break;
        insert_at_tail(head, tail, val);
    }

    print_linked_list(head);

    return 0;
}
```
আমরা যেহেতু tail এ insert করা অপটিমাইজডভাবে শিখেছি, তাই tail নামের একটি পয়েন্টারও রাখছি।

`tail` track রাখলে প্রতিবার ইনসার্ট করার সময় পুরো লিস্ট ঘুরে যেতে হয় না। একেবারে শেষে গিয়ে নতুন নোড add করা যায়।

তাই insert_at_tail() এর Time Complexity হয় O(1)।

পুরো লিস্ট ইনপুট এবং প্রিন্ট করার জন্য আমাদের Time Complexity হয় O(N)।

কিন্তু যদি আমরা `tail` track না রাখতাম, তাহলে প্রতিবার শেষ নোড খুঁজতে `O(N)` সময় লাগত, আর পুরো লিস্টের জন্য সেটা হয়ে যেত `O(N*N)` — যা অনেক বেশি।


## Linked List Reverse Printing

### Note:
- লিংকড লিস্টে **ইনডেক্স** নেই, তাই আমরা সরাসরি শেষ থেকে শুরু করে কিছু প্রিন্ট করতে পারি না।
- এক্ষেত্রে খুব ভালো একটি টেকনিক হলো **recursion** ব্যবহার করা।
- রিকারশনের মাধ্যমে আমরা লিস্টের একদম শেষে চলে যেতে পারি, তারপর পেছন থেকে একে একে প্রিন্ট করতে পারি।

---

### Steps:

1. একটি রিকার্সিভ ফাংশন ব্যবহার করবো, যা শেষ পর্যন্ত `NULL` পর্যন্ত যাবে।
2. Recursion থেকে ফেরার পথে `Value` গুলো একে একে প্রিন্ট করব — এতে করে `Value` গুলো **পেছন থেকে সামনে** প্রিন্ট হবে।

---

### e.g. 

```cpp
#include <bits/stdc++.h>
using namespace std;


class Node {
public:
    int val;
    Node* next;

    Node(int val) {
        this->val = val;
        this->next = NULL;
    }
};


void insert_at_tail(Node* &head, Node* &tail, int val) {
    Node* newNode = new Node(val);

    if (head == NULL) {
        head = newNode;
        tail = newNode;
        return;
    }

    tail->next = newNode;
    tail = newNode;
}

// Reverse print with Recursion
void print_reverse(Node* tmp) {
    if (tmp == NULL) {
        return;
    }
    print_reverse(tmp->next); 
    cout << tmp->val << endl; 
}


int main() {
    Node* head = NULL;
    Node* tail = NULL;

    int val;
    while (true) {
        cin >> val;
        if (val == -1) break;
        insert_at_tail(head, tail, val);
    }

    print_reverse(head);

    return 0;
}
```
### More Info:

- রিকারশন আসলে একটা স্ট্যাকের মতো কাজ করে।

- আমরা যখন `print_reverse()` ফাংশনে একটা `Node` পাঠাই, তখন সে আগে তার পরের `Node` এর কাজ শেষ করে আসবে।

- এই জন্য আমরা `cout << tmp->val` নিচে রাখলে সেটা রিভার্স অর্ডারে প্রিন্ট হয়।

- এটি করার Time Complexity হবে `O(N)` ।


## Delete at Head

### Note
- আমরা যদি **লিংকড লিস্টের প্রথম নোড (head)** ডিলিট করতে চাই, তাহলে `head` কে পরিবর্তন করতে হবে।
- C++ এ যেহেতু প্যারামিটার পাস বাই ভ্যালু হয়, তাই `head` কে **reference** হিসেবে পাঠাতে হবে, না হলে মূল `head` পরিবর্তন হবে না।
- যেহেতু আমরা `new` দিয়ে মেমোরি তৈরি করছি, তাই ডিলিট করার সময় `delete` ব্যবহার করতে হবে ।


### Steps:

- প্রথমে আমরা চেক করবো লিস্ট খালি কিনা । যদি `head == NULL` হয়, তাহলে `return` করে দিবো ।
- এরপর আমরা একটি পয়েন্টার রাখব যা বর্তমান `head` কে পয়েন্ট করবে । `Node* deleteNode = head;`
- `head` কে তার পরবর্তী নোডের সাথে কানেক্ট করবো  `head = head->next;`
- সবশেষে আমরা আগের `head` (মানে `deleteNode`) কে মেমোরি থেকে ডিলিট করে দিব ।  `delete deleteNode;`


### e.g.

```cpp
#include <bits/stdc++.h>
using namespace std;

class Node {
public:
    int val;
    Node* next;

    Node(int val) {
        this->val = val;
        this->next = NULL;
    }
};

void insert_at_tail(Node* &head, Node* &tail, int val) {
    Node* newNode = new Node(val);

    if (head == NULL) {
        head = newNode;
        tail = newNode;
        return;
    }

    tail->next = newNode;
    tail = newNode;
}

void print_linked_list(Node* head) {
    Node* tmp = head;
    while (tmp != NULL) {
        cout << tmp->val << endl;
        tmp = tmp->next;
    }
}

void delete_at_head(Node* &head) {
    if (head == NULL) return; 

    Node* deleteNode = head;   
    head = head->next;         
    delete deleteNode;       
}


int main() {
    Node* head = NULL;
    Node* tail = NULL;

    int val;
    while (true) {
        cin >> val;
        if (val == -1) break;
        insert_at_tail(head, tail, val);
    }

    delete_at_head(head);     
    print_linked_list(head); 

    return 0;
}
```

```cpp
Input:
10 20 30 40 -1

Output:
20
30
40

```


## Delete at Any Position

### Note :
- লিংকড লিস্টে কোনো ইনডেক্স থাকে না, তবে আমরা কাল্পনিক ইনডেক্স ধরে নিতে পারি । যেমন:  

| Index | 0  | 1  | 2  | 3  |
|-------|----|----|----|----|
| Value | 10 | 20 | 30 | 40 |

- কোনো নির্দিষ্ট পজিশন থেকে ডিলিট করতে হলে, প্রথমে ওই পজিশনের আগের নোডকে খুঁজে বের করতে হবে।
- তারপর ওই নোডের `next` পয়েন্টার পরিবর্তন করে, ডিলিট করতে হবে কাঙ্ক্ষিত নোডকে।

### Steps:

- প্রথমে একটি পয়েন্টার দিয়ে লিস্টের `head` থেকে শুরু করে `idx-1` নম্বর পজিশনের নোডে যাবো।
- তারপর ঐ নোডের `next` (মানে `idx` পজিশনের নোড) কে ডিলিট করার জন্য আলাদা করে রাখবো।
- ঐ নোডের পরের নোডকে `idx-1` পজিশনের নোডের `next` এ সেট করে দিবো।
- শেষে ডিলিট করার জন্য রাখা `deleteNode` ডিলিট করে দিবো।


### e.g.

```cpp
#include <bits/stdc++.h>
using namespace std;

class Node {
public:
  int val;
  Node* next;
  Node(int val) {
      this->val = val;
      this->next = NULL;
  }
};

void insert_at_tail(Node* &head, Node* &tail, int val) {
  Node* newNode = new Node(val);
  if (head == NULL) {
      head = newNode;
      tail = newNode;
      return;
  }
  tail->next = newNode;
  tail = newNode;
}

void print_linked_list(Node* head) {
  Node* tmp = head;
  while (tmp != NULL) {
      cout << tmp->val << endl;
      tmp = tmp->next;
  }
}

void delete_at_any_pos(Node* head, int idx) {
  Node* tmp = head;
  for (int i = 1; i < idx; i++) {
      tmp = tmp->next;
  }
  Node* deleteNode = tmp->next;
  tmp->next = tmp->next->next;
  delete deleteNode;
}

int main() {
  Node* head = NULL;
  Node* tail = NULL;

  int val;
  while (true) {
      cin >> val;
      if (val == -1) break;
      insert_at_tail(head, tail, val);
  }
  delete_at_any_pos(head, 2);
  print_linked_list(head);

  return 0;
}
```

```cpp
Input:
10 20 30 40 -1

Output:
10
20
40
```

## Delete at Tail

### Note:
- যেহেতু আমরা **singly linked list** ব্যবহার করছি, তাই সরাসরি `tail` থেকে পেছনে যেতে পারি না।
- তাই টেইল ডিলিট করতে হলে প্রথম থেকে লিস্ট ট্রাভার্স করে টেইলের আগের নোড পর্যন্ত যেতে হবে।
- এই কারণে টেইল ডিলিটের Time Complexity হয় **O(N)**।
- আগের `delete_at_any_pos` ফাংশনের মতোই টেইল ডিলিট করা যাবে, শুধু টেইল পয়েন্টার আপডেট করতে হবে টেইলের আগের নোডে।

---

### Steps:

- আমরা শুরু থেকে লিস্ট ট্রাভার্স করে টেইলের আগের নোডে যাবো।
- সেই নোডের `next` পয়েন্টার `NULL` করে দিবো, কারণ এটা এখন নতুন `tail` হবে।
- Old `tail` নোডকে ডিলিট করব এবং `tail` পয়েন্টার আপডেট করব নতুন `tail` এ ।


### e.g.

```cpp
#include <bits/stdc++.h>
using namespace std;

class Node {
public:
    int val;
    Node* next;
    Node(int val) {
        this->val = val;
        this->next = NULL;
    }
};

void insert_at_tail(Node* &head, Node* &tail, int val) {
    Node* newNode = new Node(val);
    if (head == NULL) {
        head = newNode;
        tail = newNode;
        return;
    }
    tail->next = newNode;
    tail = newNode;
}

void print_linked_list(Node* head) {
    Node* tmp = head;
    while (tmp != NULL) {
        cout << tmp->val << endl;
        tmp = tmp->next;
    }
}

void delete_at_tail(Node* head, Node* &tail, int idx) {
    Node* tmp = head;
    for (int i = 1; i < idx; i++) {
        tmp = tmp->next;
    }
    Node* deleteNode = tmp->next;
    tmp->next = tmp->next->next;
    delete deleteNode;
    tail = tmp;
}

int main() {
    Node* head = NULL;
    Node* tail = NULL;

    int val;
    while (true) {
        cin >> val;
        if (val == -1) break;
        insert_at_tail(head, tail, val);
    }
    cout << "tail before delete -> " << tail->val << endl;
    delete_at_tail(head, tail, 3);
    cout << "tail after delete -> " << tail->val << endl;
    print_linked_list(head);

    return 0;
}
```

```cpp
Input:
10 20 30 40 -1

Output:
tail before delete -> 40
tail after delete -> 30
10
20
30
```


## Sorting a linked list with Selection Sort

### Note:
- এখানে আমরা **শুধুমাত্র নোডের ভ্যালু গুলো** আপডেট বা সোয়াপ করব, পুরো নোডগুলো স্থানান্তর করব না।
- তাই `head` পরিবর্তনের দরকার হয় না, এজন্য আমরা `head` কে রেফারেন্স হিসেবে পাঠাইনি।
- এটি হলো **selection sort** এর লজিক, যা দুই লুপ চালিয়ে সবচেয়ে ছোট (বা বড়) উপাদান বাছাই করে ঠিক অবস্থানে বসায়।
- selection sort এর Time Complexity হলো **O(N*N) বা **O(N²)**।

---

### Steps:

- বাইরের লুপ `i` দিয়ে প্রথম থেকে শেষের আগের নোড পর্যন্ত যাবো।
- ভিতরের লুপ `j` দিয়ে `i` এর পরের নোড থেকে শেষ পর্যন্ত যাবো।
- যদি `i->val` বড় হয় `j->val` থেকে, তাহলে তাদের ভ্যালু swap করবো।
- শেষ পর্যন্ত লিংকড লিস্ট sort হয়ে যাবে (ascending order এ)।
- যদি descending order করতে চাই, তাহলে `condition` পরিবর্তন করলেই হবে (`i->val < j->val`)।

---

### e.g.

```cpp
#include <bits/stdc++.h>
using namespace std;

class Node {
public:
    int val;
    Node* next;
    Node(int val) {
        this->val = val;
        this->next = NULL;
    }
};

void insert_at_tail(Node* &head, Node* &tail, int val) {
    Node* newNode = new Node(val);
    if (head == NULL) {
        head = newNode;
        tail = newNode;
        return;
    }
    tail->next = newNode;
    tail = newNode;
}

void print_linked_list(Node* head) {
    Node* tmp = head;
    while (tmp != NULL) {
        cout << tmp->val << endl;
        tmp = tmp->next;
    }
}

void sort_linked_list(Node* head) {
    for (Node* i = head; i->next != NULL; i = i->next) {
        for (Node* j = i->next; j != NULL; j = j->next) {
            if (i->val > j->val) {
                swap(i->val, j->val);
            }
        }
    }
}

/*
যদি আমরা i != NULL দিতাম, তাহলে i শেষ নোড পর্যন্ত চলে যেতো।  
কিন্তু i->next != NULL দিয়ে আমরা i কে শেষ নোডের আগ পর্যন্ত রেখেছি,  
যাতে j এর সাথে তুলনা করতে সমস্যা না হয়।
*/

int main() {
    Node* head = NULL;
    Node* tail = NULL;

    int val;
    while (true) {
        cin >> val;
        if (val == -1) break;
        insert_at_tail(head, tail, val);
    }
    sort_linked_list(head);
    print_linked_list(head);

    return 0;
}
```

```cpp
Input:
5 9 2 4 1 -1

Output:
1
2
4
5
9

```


## Complexity of every operations on Singly Linked List
| Operation  |            | Complexity                      |
|------------|--------------------------|--------------------------------|
| Insertion  | at Head                  | O(1)                           |
|            | at Tail                  | O(N) -> without tail tracking  |
|            |                          | O(1) -> with tail tracking     |
|            | at any position          | O(N)                           |
| Deletion   | at Head                  | O(1)                           |
|            | at Tail                  | O(N)                           |
|            | at any position          | O(N)                           |
| Printing   | Forward                  | O(N)                           |
|            | Backward                 | O(N) -> using recursion        |
| Input      |                          | O(N) -> with tail tracking     |
|            |                          | O(N*N) -> without tail tracking|
| Sorting    |                          | O(N*N) -> using selection sort |




----





## Linked List Playground





<!-- <iframe src="https://linked-list-visualizer.vercel.app/app" width="100%" height="600" frameborder="0"></iframe> -->
<!-- <TheIframe src="https://linked-list-visualizer.vercel.app/app" /> -->
<script setup>
import { ref } from 'vue'

const isFullscreen = ref(false)

function toggleFullscreen() {
  isFullscreen.value = !isFullscreen.value
}

defineProps({
  src: String
})
</script>

<!-- <button class="maximize" @click="toggleFullscreen">
{{ isFullscreen ? 'Exit Fullscreen' : 'Fullscreen' }}
</button> -->

<div :class="['iframe-container', { fullscreen: isFullscreen }]">
    <button class="fullscreen-button" @click="toggleFullscreen">
      {{ isFullscreen ? 'Exit Fullscreen' : 'Fullscreen' }}
    </button>
    <iframe 
      src="https://linked-list-visualizer.vercel.app/app" 
      frameborder="0" 
      width="100%" 
      height="100%" 
      allowfullscreen>
    </iframe>
  </div>

<style>
.iframe-container {
  position: relative;
  width: 100%;
  height: 600px;
  transition: all 0.3s ease;
}

.fullscreen {
  position: fixed !important;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 9999;
  background: white;
}
.maximize{
  z-index: 10000;
  display: block;
  background: #2b2b2b;
  color: white;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 24px;
  margin-left: auto;
}
.fullscreen-button {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10000;
  background: #2b2b2b;
  color: white;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
