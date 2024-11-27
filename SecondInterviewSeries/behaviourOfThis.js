const thisBehaviorTable = [
  {
    condition: "console.log(this)",
    nodeNonStrict: "Empty Object `{}`",
    nodeStrict: "Empty Object `{}`",
    browserNonStrict: "`Window` Object",
    browserStrict: "`Window` Object",
  },
  {
    condition: "Inside standalone function: `function showThis()`",
    nodeNonStrict: "Global Object (`global`)",
    nodeStrict: "`undefined`",
    browserNonStrict: "`Window` Object",
    browserStrict: "`undefined`",
  },
  {
    condition: "Inside method of an object: `obj.f()`",
    nodeNonStrict: "Object itself (`obj`)",
    nodeStrict: "Object itself (`obj`)",
    browserNonStrict: "Object itself (`obj`)",
    browserStrict: "Object itself (`obj`)",
  },
  {
    condition: "Nested function in method: `g()` inside `obj.f()`",
    nodeNonStrict: "Global Object (`global`)",
    nodeStrict: "`undefined`",
    browserNonStrict: "`Window` Object",
    browserStrict: "`undefined`",
  },
];

// Display the table in console
console.table(thisBehaviorTable);

// # Behavior of `this` in JavaScript (Node.js and Browser)

//This table summarizes the behavior of `this` in JavaScript under different conditions in Node.js and Browser environments with both non-strict and strict modes.

// | **Condition**                                           | **Node.js (Non-Strict Mode)** | **Node.js (Strict Mode)** | **Browser (Non-Strict Mode)** | **Browser (Strict Mode)** |
// |---------------------------------------------------------|-------------------------------|---------------------------|-------------------------------|----------------------------|
// | `console.log(this)`                                     | Empty Object `{}`            | Empty Object `{}`         | `Window` Object              | `Window` Object           |
// | Inside standalone function: `function showThis()`       | Global Object (`global`)      | `undefined`               | `Window` Object              | `undefined`               |
// | Inside method of an object: `obj.f()`                  | Object itself (`obj`)         | Object itself (`obj`)     | Object itself (`obj`)         | Object itself (`obj`)     |
// | Nested function in method: `g()` inside `obj.f()`       | Global Object (`global`)      | `undefined`               | `Window` Object              | `undefined`               |
