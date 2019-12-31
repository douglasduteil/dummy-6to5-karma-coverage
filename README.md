:skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull:

<br>
<br>

<h3 align=center>Outdated</h3>

<br>
<br>

:skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull::skull:

<br>
<br>
<br>
<br>

<hr>

<br>
<br>
<br>
<br>
<br>
<br>

# Dummy-6to5-karma-coverage [![Build Status][travis-image]][travis-url]

> Dummy babel/6to5  project to test karma coverage on it with [isparta](https://github.com/douglasduteil/isparta)

### Dev Dependencies

```js
{
  "babel-core": "^4.0.0",
  "chai": "^1.10.0",
  "isparta": "^2.0.0",
  "karma": "^0.12.31",
  "karma-babel-preprocessor": "^4.0.0",
  "karma-chai": "^0.1.0",
  "karma-coverage": "douglasduteil/karma-coverage#next",
  "karma-jspm": "^1.1.3",
  "karma-mocha": "^0.1.10",
  "karma-phantomjs-launcher": "^0.1.4",
  "mocha": "^2.1.0"
}
```

### Initial setup

```bash
npm install -g karma-cli jspm
npm install
jspm install
```

### Running the tests

```sh
# Normal testing
npm test
# Testing with coverage :)
npm run coverage
# Consult the result on the coverage folder
google-chrome coverage/phantomjs/index.html
```

[travis-url]: http://travis-ci.org/douglasduteil/dummy-6to5-karma-coverage
[travis-image]: http://travis-ci.org/douglasduteil/dummy-6to5-karma-coverage.svg?branch=master
