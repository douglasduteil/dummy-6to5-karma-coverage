//

var Animal = class  {
  sayHi() {
    return 'Hi, I am a ' + this.type() + '.';
  }

  sayOther() {
    return 'WAT?!';
  }

  static getName() {
    return 'Animal';
  }
}

class Dog extends Animal {
  type() { return 'dog'; }

  sayHi() {
    return super.sayHi() + ' WOOF!';
  }

  static getName() {
    return super.getName() + '/Dog';
  }
}


class Horse extends (function(){ return Animal }()) {
  sayHi() {
    return super.sayOther();
  }
}

class Multiplier {
  constructor(n=1) {
    this.n = n;
  }

  multiply(n=1) {
    return n * this.n;
  }
}

export {Animal, Dog, Horse, Multiplier};

