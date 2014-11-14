/*
import angular from 'angular';
import 'angular-mocks';
import fooModule from './fooModule';

describe('something', function() {
  var fooCtrl, $rootScope;

  beforeEach(() => {

    angular.mock.module(fooModule.name);

    inject((_$rootScope_, $controller) => {
      $rootScope = _$rootScope_;
      fooCtrl = $controller('FooController');
    });

  });

  it('shoult define', () => {
    expect(fooCtrl.bar).toEqual(jasmine.any(Function));
  });

  it('shoult return a promise', () => {
    var dummy = 0;
    fooCtrl.bar().then(() => ++dummy);
    $rootScope.$apply();
    expect(dummy).toBe(1);
  });
});
*/

