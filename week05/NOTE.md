# 每周总结可以写在这里

## Realm
Realm 中包含一组完整的js对象，可以通过一个iframe生成一个新的Realm

## 执行上下文栈

执行上下文栈中包含的内容：

* code evaluation state (async/await)
* Function
* Script or Module
* Generator
* Realm
* LexicalEnvironment （词法环境）
* VariableEnvironment （变量环境）


### LexicalEnvironment

* this
* new Target
* super
* 变量

### Environment Records

* Declarative Environment Records
  1. Function Environment Records
  2. module Environment Records

* Global Environment Records

* Object Environment Records

### Function - Closure


