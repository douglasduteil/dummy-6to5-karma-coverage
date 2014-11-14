System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@^1.3.0",
    "angular-mocks": "github:angular/bower-angular-mocks@^1.3.0"
  }
});

System.config({
  "versions": {
    "github:angular/bower-angular": "1.3.0",
    "github:angular/bower-angular-mocks": "1.3.0"
  }
});

