# Stateful vs Stateless npm modules

```js
node index.js
```

```
Controller A-stateless
A-stateless - get:  AAA
A-stateless - get:  BBB
Controller B-stateless
B-stateless - get:  AAA


Controller A-stateful
A-stateful - get:  AAA
A-stateful - get:  BBB
Controller B-stateful
B-stateless - get:  BBB
```