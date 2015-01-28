import {Animal, Dog, Horse, Multiplier} from './classes';

describe('Anonymous classes', function () {

  describe('Animal', () => {

    it('should be a class', () => {
      expect(new Animal().constructor).to.a('function');
      expect(new Animal()).to.be.an.instanceof(Animal);
    });

  });


  describe('Dog', () => {

    beforeEach(() => {
      this.dog = new Dog();
    });

    it('should say hi', () => {
      expect(this.dog).to.be.an.instanceof(Animal);
      expect(this.dog).to.be.an.instanceof(Dog);
      expect(this.dog.sayHi).to.a('function');
      expect(this.dog.sayHi()).to.equal('Hi, I am a dog. WOOF!');
    });

    it('should be part of Animal', () => {
      expect(Dog.getName()).to.equal('Animal/Dog');
    });

  });

});


describe('Class super function', function() {

  describe('Horse', () => {

    it('should say hi', () => {
      expect(new Horse().sayHi()).to.equal('WAT?!');
    });

  });
});


describe('Class constructor', function() {

  describe('Multiplier', () => {

    it('should say hi', () => {
      expect(new Multiplier().n).to.equal(1);
      expect(new Multiplier(6).n).to.equal(6);
      expect(new Multiplier().multiply()).to.equal(1);
      expect(new Multiplier(2).multiply(3)).to.equal(6);
    });

  });
});
