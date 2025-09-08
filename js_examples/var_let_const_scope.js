function testScope() {
  console.log(a); // undefined (hoisted, but uninitialized)
   a = 10;
  console.log(a); // 10 (after initialization)

  if (true) {
    var b = 20; // var is function-scoped, so it's available outside the block
    let c = 30; // let is block-scoped, so it's only available inside the block
    const d = 40; // const is block-scoped, so it's only available inside the block
    console.log(b); // 20 (inside the block, var is still accessible)
    console.log(c); // 30 (inside the block, let is accessible)
    console.log(d); // 40 (inside the block, const is accessible)
  }

  console.log(b); // 20 (b is available outside the block because var is function-scoped)
  // console.log(c); // ReferenceError: c is not defined (let is block-scoped)
  // console.log(d); // ReferenceError: d is not defined (const is block-scoped)
}

testScope();

console.log(a); // 10 (after initialization)