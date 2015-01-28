


// Array comprehension
// ============================================================================
let customers = [ { city: 'Paris', name: 'foo', age: 42},  { city: 'Seattle', name: 'oof', age: 24}];
let results = [for (c of customers) if (c.city == 'Seattle') { name: c.name, age: c.age }];
export {results as arrayComprehensionResult};

// Arrow functions
// ============================================================================
// Expression bodies
var evens = [0,1,2,3,4,5,6,7,8,9];
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

// Statement bodies
var fives = [];
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f => {
      console.log(this._name + " knows " + f);
    });
  }
};



// Async functions
// ============================================================================


async function chainAnimationsAsync(elem, animations) {
  for (var anim of animations) {
    await anim(elem)
  }
}




// Computed property names
// ============================================================================
var foo = "foo";
var bar = "bar";
var obj = {
  ["foo" + bar]: "heh",
  ["bar" + foo]: "noo",
  foo: "foo",
  bar: "bar"
};





// Constants
// ============================================================================
export const MULTIPLIER = 5;

// Compilation error
//MULTIPLIER = 6; // error
//var MULTIPLIER; // error





// Default parameters
// ============================================================================

function f(x, y = 12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
f(3) == 15




// Destructuring
// ============================================================================

// list matching
var [a, , b] = [1,2,3];

// object matching
function getASTNode(){
  return {
    op: 'a',
    lhs: {
      op: 'b'
    },
    rhs: 'c'
  };
}

var { op: a, lhs: { op: b }, rhs: c } = getASTNode();

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var { op, lhs, rhs } = getASTNode();

// Can be used in parameter position
export function destructuringName({ name: x }) { return x; };

// Fail-soft destructuring
var [a] = [];
a === undefined;




// For-of
// ============================================================================
export function forOfPower(arr){
  var res = [];
  for (var i of arr) {
    res.push( i * i );
  }
  return res;
}






// Let scoping
// ============================================================================
let arr = [0,2,5];
for (let i in arr) {
  let v = arr[i];
}



// Modules ....
// ============================================================================






// Property method assignment
// ============================================================================

var obj = {
  foo() {
    return "foobar";
  },

  get bar() {
    return this._bar;
  },

  set bar(val) {
    this._bar = val;
  }
};





// Property name shorthand
// ============================================================================
function f(x, y) {
  return { x, y };
}





// Rest parameters
// ============================================================================

function f(x, ...y) {
  // y is an Array
  return x * y.length;
}
f(3, "hello", true) == 6




// Spread
// ============================================================================

function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f(...[1,2,3]) == 6




// Template literals
// ============================================================================

var x = 5;
var y = 10;
export function templateLiteralsXY(){
  return `${x} + ${y} = ${x + y}`;
}







// Unicode regex
// ============================================================================

var string = 'foo💩bar';
export function unicodeMatch1(){
  let match = string.match(/foo(.)bar/u);
  return match[1];
}

