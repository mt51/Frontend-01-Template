
### Completion Record （语句执行完成的结果）
[[type]]: normal、break、continue、return、throw
[[value]]: Types[其中类型]
[[target]]: label

### 简单语句

* ExpressionStatement
* DebuggerStatement
* EmptyStatement
* ThrowStatement
* ContinueStatement
* BreakStatement
* ReturnStatement


Block

Iteration

* while
* do while
* for
* for in
* for of

### for循环中let和const

```javascript

  for(let i = 0; i < 20; i++) {
    let i = 0;
    console.log(i);
  }

  console.log(i); // 出错

  作用域模型
  for {
    i
    {
      i
    }
  }
```

for语句括号内声明的变量作用域在for语句外，不影响 Block内的作用域


## Object

### 特征
唯一性、状态、行为

### 属性
属性用来描述对象的状态和行为，通常数据属性用来描述状态，访问器属性用来描述行为

#### 属性访问
当我们访问属性时，如果当前对象没有该属性时，会沿着原型找原型对象上是否有该属性，直到为null为止。

### API 和 Grammar
* {} . [] Object.defineProperty
* Object.create / Object.setPrototypeOf / Object.getPrototypeOf
* new class extends
* new function prototype


### Function Object
函数对象处理一般对象的行为和原型，还有一个行为[[call]]
使用function关键字、箭头运算符或者Function构造函数创建的对象会拥有[[call]]行为，使用类似`f()`这样的预发会访问到[[call]]这个行为，如果对应的对象没有[[call]]行为则会报错

